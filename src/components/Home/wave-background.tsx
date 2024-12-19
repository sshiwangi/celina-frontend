"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Vector2 } from "three";

const HeroWaves = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Advanced vertex shader for realistic wave movement
    const waveVertexShader = `
      uniform float uTime;
      uniform vec2 uFrequency;
      uniform float uSpeed;
      uniform float uWaveHeight;
      uniform vec2 uMouse;
      uniform float uHover;
      
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormal;
      
      // Noise functions for realistic waves
      vec4 permute(vec4 x) {
        return mod(((x*34.0)+1.0)*x, 289.0);
      }
      
      vec2 fade(vec2 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }
      
      float cnoise(vec2 P) {
        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
        Pi = mod(Pi, 289.0);
        vec4 ix = Pi.xzxz;
        vec4 iy = Pi.yyww;
        vec4 fx = Pf.xzxz;
        vec4 fy = Pf.yyww;
        vec4 i = permute(permute(ix) + iy);
        vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
        vec4 gy = abs(gx) - 0.5;
        vec4 tx = floor(gx + 0.5);
        gx = gx - tx;
        vec2 g00 = vec2(gx.x,gy.x);
        vec2 g10 = vec2(gx.y,gy.y);
        vec2 g01 = vec2(gx.z,gy.z);
        vec2 g11 = vec2(gx.w,gy.w);
        vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11));
        g00 *= norm.x;
        g01 *= norm.y;
        g10 *= norm.z;
        g11 *= norm.w;
        float n00 = dot(g00, vec2(fx.x, fy.x));
        float n10 = dot(g10, vec2(fx.y, fy.y));
        float n01 = dot(g01, vec2(fx.z, fy.z));
        float n11 = dot(g11, vec2(fx.w, fy.w));
        vec2 fade_xy = fade(Pf.xy);
        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
        return 2.3 * n_xy;
      }
      
      void main() {
        vUv = uv;
        
        // Calculate wave elevation
        float elevation = 0.0;
        
        // Main waves
        elevation += sin(vUv.x * uFrequency.x + uTime * uSpeed) * 
                    sin(vUv.y * uFrequency.y + uTime * uSpeed) * uWaveHeight;
                    
        // Secondary waves for complexity
        elevation += cnoise(vec2(vUv.x * 3.0 + uTime * 0.2, vUv.y * 3.0)) * uWaveHeight * 0.5;
        
        // Mouse interaction wave
        float mouseDistance = length(uv - uMouse);
        elevation += (1.0 - smoothstep(0.0, 0.3, mouseDistance)) * uHover;
        
        vElevation = elevation;
        
        // Calculate normal for lighting
        vec3 pos = position + normal * elevation;
        
        // Compute transformed position
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        
        // Pass normal to fragment shader
        vNormal = normalize(normalMatrix * normal);
      }
    `;

    // Fragment shader with sophisticated lighting and color
    const waveFragmentShader = `
      uniform vec3 uColorDeep;
      uniform vec3 uColorShallow;
      uniform float uTime;
      
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormal;
      
      void main() {
        // Dynamic color mixing based on elevation
        vec3 color = mix(uColorDeep, uColorShallow, vElevation * 0.5 + 0.5);
        
        // Add specular highlight
        vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
        float specular = pow(max(dot(vNormal, lightDir), 0.0), 32.0);
        color += specular * 0.5;
        
        // Add pulse effect
        float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
        color *= 0.8 + pulse * 0.2;
        
        gl_FragColor = vec4(color, 0.9);
      }
    `;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create wave mesh
    const geometry = new THREE.PlaneGeometry(20, 20, 128, 128);
    const material = new THREE.ShaderMaterial({
      vertexShader: waveVertexShader,
      fragmentShader: waveFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uFrequency: { value: new Vector2(3, 2) },
        uSpeed: { value: 0.5 },
        uWaveHeight: { value: 0.2 },
        uColorDeep: { value: new THREE.Color("#2c3e50") },
        uColorShallow: { value: new THREE.Color("#3498db") },
        uMouse: { value: new Vector2(0.5, 0.5) },
        uHover: { value: 0.0 },
      },
      transparent: true,
      side: THREE.DoubleSide,
    });

    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI * 0.5;
    scene.add(waves);

    camera.position.set(0, 4, 5);
    camera.lookAt(waves.position);

    // Mouse interaction
    const mouse = new Vector2(0, 0);
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      material.uniforms.uMouse.value = new Vector2(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update uniforms
      material.uniforms.uTime.value = elapsedTime;

      // Smooth hover effect
      material.uniforms.uHover.value = THREE.MathUtils.lerp(
        material.uniforms.uHover.value,
        mouse.y * 0.5,
        0.1
      );

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]"
    />
  );
};

export default HeroWaves;
