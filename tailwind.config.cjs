/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        light: "#53B848",
        dark: "#3A8732",
      },
      blur: {
        xs: "2px",
      },
      display: ["group-hover"],
      keyframes: {
        up: {
          '0%' : { transform: 'translateY(0px)' },
          '100%' : { transform: 'translateY(-5px)' },
        },
        navUp: {
          '0%' : { transform: 'translateY(200px)' },
          '100%' : { transform: 'translateY(0px)' },
        },
        down: {
          '0%' : { transform: 'translateY(-5px)' },
          '100%' : { transform: 'translateY(0px)' },
        },
        left: {
          '0%' : { transform: 'translateX(0px)' },
          '100%' : { transform: 'translateX(-5px)' },
        },
        right: {
          '0%' : { transform: 'translateX(-5px)' },
          '100%' : { transform: 'translateX(0px)' },
        },
        navRight: {
          '0%' : { transform: 'translateX(-200px)' },
          '100%' : { transform: 'translateX(0px)' },
        },
        appear: {
          '0%' : { transform: 'translateY(-50px)' },
          '100%' : { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'up-box' : 'up 250ms linear both',
        'down-box' : 'down 250ms linear both',
        'right-box' : 'right 250ms linear both',
        'left-box' : 'left 250ms linear both',
        'appear' : 'appear 300ms linear both',
        'navUp-box' : 'navUp 1400ms linear both',
        'navRight-box' : 'navRight 1400ms linear both',
      },
    },
  },
  plugins: [
  ],

}
