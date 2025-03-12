/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app.vue", "./components/**/*.{vue,js,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            padding: '20px',
            screens: {
              '2xl': '1400px',
            },
          },
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          dark: {
            bg: '#121212',
            surface: '#1E1E1E',
            border: '#2E2E2E',
          },
        },
      },
    },
    plugins: [],
    darkMode: 'class', // Agar kerak bo'lsa, 'media' ga o'zgartiring
  };