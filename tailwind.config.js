/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1fcf5',
          100: '#defaea',
          200: '#bef4d5',
          300: '#8ce9b4',
          400: '#52d68b',
          500: '#2bbc6a',
          600: '#1e9b55',
          700: '#1e884d',
          800: '#1a613a',
          900: '#175032',
          950: '#072c19',
        },
        secondary: {
          50: '#faf7f5',
          100: '#f5ede8',
          200: '#ebd8c9',
          300: '#d8b79d',
          400: '#bf8f6f',
          500: '#a67550',
          600: '#865c3e',
          700: '#6a4733',
          800: '#523627',
          900: '#3d291f',
          950: '#21150f',
        },
        white: {
          50: '#ffffff',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929',
        },
        black: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
