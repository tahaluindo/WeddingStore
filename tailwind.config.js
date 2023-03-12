const { blackA, mauve, violet } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
        'Montserrat',
        'Montserrat-Extrabold',
        'Montserrat-Variable'
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      paradise: 'Paradise',
      playfair: 'Playfair',
      playfairBlack: 'Playfair-black',
      playfairDisplay: 'Playfair Display',
      adela: 'Adela',
      adelia: 'Adelia',
      lobster: 'Lobster',
      antonio: 'Antonio',
      honey: 'Honey',
      richard: 'Richard',
      damion: 'Damion',
      belgrano: 'Belgrano',
      // poppins: [
      //   'Poppins',
      //   'Poppins-Extrabold',
      // ],
      Poppins: [
        'Poppins',
        'sans-serif',
        'Poppins-Extrabold'
      ],
      abhayalibre: [
        'AbhayaLibre',
        'AbhayaLibre-Bold'
      ],
    },
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
      },
      backgroundImage: {
        'wedd': "url('/static/bg.jpg')",
      },
      keyframes: {
        fall: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        fly: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'fall': 'fall 1s ease-out 1',
        'fly': 'fly 1s ease-out 1',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
    variants: {
      extend: {
        visibility: ["group-hover"]
      }
    }
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],

    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
}