/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      '868': '868px',
      'lg': '1024px',
      'xl': '1280px',
      '1440': '1440px',
      '2xl': '1600px',
    },
    extend: {
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#2f65b9',
        'primary-dark': '#2a5aa6',
        'primary-light': '#eaeff8',
        'bg-primary-light': "#f8f9fa",
        'bg-secondary-light': "#fff",
        'bg-primary-dark': "#07142e",
        'bg-secondary-dark': "#080d1e",
        'txt-primary-light': "#6f7f92",
        'txt-secondary-light': "#1f2937",
        'txt-primary-dark': "#a5a8ab",
        'txt-secondary-dark': "#fff",
      },
      keyframes: {
        shake: {
          "from, to": { transform: "translate3d(0, 0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate3d(-10px, 0, 0)" },
          "20%, 40%, 60%, 80%": { transform: "translate3d(10px, 0, 0)" },
        },
        expand: {
          '0%': { transform: 'scale(0.75)' },
          '50%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(0.75)' },
        },
        "fade-in-up": {
          from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
          to: { opacity: 1, transform: "none" },
        },
        "fade-in-down": {
          from: { opacity: 0, transform: "translate3d(0, -30%, 0)" },
          to: { opacity: 1, transform: "none" },
        },
        "fade-out-down": {
          from: { opacity: 1 },
          to: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-in-left": {
          from: {
            opacity: "0",
            transform: "translate3d(-50%, 0, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          from: {
            opacity: "0",
            transform: "translate3d(50%, 0, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-left": {
          from: {
            transform: "translate3d(-20%, 0, 0)",
            visibility: "visible",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-right": {
          from: {
            transform: "translate3d(100%, 0, 0)",
            visibility: "visible",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-down": {
          from: {
            transform: "translate3d(0, -20%, 0)",
            visibility: "visible",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        shake: "shake 500ms ease-in-out",
        expand: 'expand 8s infinite ease-in-out',
        "fade-in-up-fast": "fade-in-up 150ms ease-in-out",
        "fade-out-down-fast": "fade-out-down 150ms ease-in-out",
        "fade-in-down": "fade-in-down 250ms ease-in-out",
        "fade-in-down-slow": "fade-in-down 500ms ease-in-out",
        "fade-out": "fade-out 250ms ease-in-out",
        "fade-in": "fade-in 300ms ease-in-out",
        "fade-in-fast": "fade-in 150ms ease-in-out",
        "slide-in-left-slow": "slide-in-left 500ms ease-in-out",
        "slide-in-left": "slide-in-left 300ms ease-in-out",
        "slide-in-right-slow": "slide-in-right 500ms ease-in-out",
        "slide-in-down": "slide-in-down 300ms ease-in-out",
        "fade-in-left-fast": "fade-in-left 150ms ease-in-out",
        "fade-in-left": "fade-in-left 300ms ease-in-out",
        "fade-in-right-fast": "fade-in-right 150ms ease-in-out",
        "fade-in-right": "fade-in-right 300ms ease-in-out",
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
}
