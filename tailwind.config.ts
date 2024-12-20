import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Background colors
        background: "#0A0E1A",
        secondary: "#2A2A2A",
        hover: "#2E2E2E",

        // Border colors
        border: "#3A3A3A",

        // Text colors
        text: {
          DEFAULT: "#FFFFFF",
          secondary: "#A0A0A0",
        },

        // Icon colors
        icon: {
          DEFAULT: "#FFFFFF",
          secondary: "#808080",
        },

        // Brand/Primary colors
        primary: {
          DEFAULT: "#4A9D9A",
          hover: "#5AB5B2",
        },

        // Cyan colors
        cyan: {
          300: "#22D3EE",
          400: "#22D3EE",
          500: "#06B6D4",
          950: "rgb(6 182 212 / 0.1)", // For bg-cyan-950/30
        },

        // Blue colors
        blue: {
          400: "#0EA5E9",
          500: "rgb(59 130 246)",
        },

        // Gray colors
        gray: {
          400: "rgb(156 163 175)",
        },

        // Red colors (from the stop button)
        red: {
          400: "rgb(248 113 113)",
          500: "rgb(239 68 68)",
        },

        // Active item background
        active: "#2A4A49",

        emerald: {
          400: "#a8ff95",
        },
        // border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Add your custom colors for the dark theme
        dark: {
          900: "#0D0A1F", // Main background
          800: "#1A1625", // Card background
          700: "#24202F", // Lighter elements
        },
        brand: {
          purple: "#8A2BE2", // Logo purple
          gradient: {
            from: "#FFD700", // Start of gradient (yellow/gold)
            to: "#FF69B4", // End of gradient (pink)
          },
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(138, 43, 226, 0.2)",
        "glow-strong": "0 0 30px rgba(138, 43, 226, 0.4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
