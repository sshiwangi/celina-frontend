"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ParticleCircle = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    // Set renderer size and background
    renderer.setSize(600, 600);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Custom shader for particles
    const particleShader = {
      vertexShader: `
        uniform float uTime;
        uniform float uSize;
        attribute float aScale;
        attribute vec3 aRandomness;
        varying vec3 vPosition;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // Rotation animation
          float angle = uTime * 0.5;
          vec3 pos = position;
          pos.x = cos(angle) * position.x - sin(angle) * position.z;
          pos.z = sin(angle) * position.x + cos(angle) * position.z;
          
          // Add randomness
          pos += aRandomness;
          
          vec4 viewPosition = viewMatrix * vec4(pos, 1.0);
          vec4 projectedPosition = projectionMatrix * viewPosition;
          
          gl_Position = projectedPosition;
          gl_PointSize = uSize * aScale * (1.0 / -viewPosition.z);
          
          vPosition = pos;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying vec3 vPosition;

        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float alpha = 0.05 / distanceToCenter - 0.1;
          
          vec3 finalColor = mix(vec3(0.4, 0.2, 1.0), vec3(1.0, 0.4, 0.8), vPosition.y * 0.5 + 0.5);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
    };

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const randomness = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 1;
      const angle = (i / particleCount) * Math.PI * 2;
      const radiusVariation = Math.random() * 0.2;

      positions[i3] = Math.cos(angle) * (radius + radiusVariation);
      positions[i3 + 1] = (Math.random() - 0.5) * 0.2;
      positions[i3 + 2] = Math.sin(angle) * (radius + radiusVariation);

      scales[i] = Math.random();

      randomness[i3] = (Math.random() - 0.5) * 0.2;
      randomness[i3 + 1] = (Math.random() - 0.5) * 0.2;
      randomness[i3 + 2] = (Math.random() - 0.5) * 0.2;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "aScale",
      new THREE.BufferAttribute(scales, 1)
    );
    particleGeometry.setAttribute(
      "aRandomness",
      new THREE.BufferAttribute(randomness, 3)
    );

    // Create material with custom shader
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: particleShader.vertexShader,
      fragmentShader: particleShader.fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 30 },
        uColor: { value: new THREE.Color(0x7c4dff) },
      },
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Add glowing ring
    const ringGeometry = new THREE.RingGeometry(0.9, 1.1, 64);
    const ringMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        
        void main() {
          float glow = sin(vUv.x * 20.0 + uTime) * 0.5 + 0.5;
          vec3 color = mix(vec3(0.4, 0.2, 1.0), vec3(1.0, 0.4, 0.8), vUv.x);
          gl_FragColor = vec4(color, glow * 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ring);

    camera.position.z = 3;

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particleMaterial.uniforms.uTime.value = elapsedTime;
      ringMaterial.uniforms.uTime.value = elapsedTime;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(particles);
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-[600px] h-[600px] mx-auto"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
      }}
    />
  );
};

export default ParticleCircle;
