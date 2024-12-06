/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        orbitron: ["Orbitron", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif']
      },

      colors: {
        primary: 'rgb(10, 25, 47)',
        background: '#323946',
        secondary: '#0ef',
        border_color: 'rgba(0, 238, 255, 0.171)',
        button: 'rgba(0, 238, 255, 0.534)',
      },

      boxShadow: {
        '3xl': '0 0 40px 20px rgba(0, 238, 255, 0.137)',
        'shadow_border': '#0ef 0 0 .2rem',
        'shadow_button': '1px 1px 10px 1px rgba(0, 238, 255, 0.212)'
      },

      backgroundImage: {
        'projeto_Twitter': "url('/src/assets/images/projects/Projeto_Twitter.png')"
      }

    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

