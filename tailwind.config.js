/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        console: {
          bg: "#080c14",
          surface: "#0f172a",
          panel: "#131c2e",
          card: "#182238",
          border: "#1e2d4a",
          highlight: "#263759",
        },
        safe: {
          DEFAULT: "#10b981",
          glow: "rgba(16, 185, 129, 0.15)",
        },
        warning: {
          DEFAULT: "#f59e0b",
          glow: "rgba(245, 158, 11, 0.15)",
        },
        critical: {
          DEFAULT: "#ef4444",
          glow: "rgba(239, 68, 68, 0.2)",
        },
        telemetry: {
          DEFAULT: "#06b6d4",
          glow: "rgba(6, 182, 212, 0.15)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake-heavy': 'shake 0.15s ease-in-out infinite',
        'shake-moderate': 'shake 0.3s ease-in-out infinite',
        'damper-engage': 'damper 1.5s ease-out forwards',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-4px, 3px) rotate(-0.5deg)' },
          '50%': { transform: 'translate(3px, -4px) rotate(0.5deg)' },
          '75%': { transform: 'translate(-3px, -2px) rotate(-0.3deg)' },
        }
      }
    },
  },
  plugins: [],
}
