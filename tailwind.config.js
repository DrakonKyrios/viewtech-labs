/** @type {import('tailwindcss').Config} */
module.exports = {
  'content': ['./src/**/*.{html,js}'],
  theme: {
    'extend': {
      'screens': {
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px',
      },
      colors: {
        'primary': {
          'lighter': '#becee7cc',
          DEFAULT: '#16253b',
          'dark': '#121f31',
          'darker': '#08182e'
        },
        'secondary': {
          DEFAULT: '#D4AF27'
        },                
      },
      fontFamily: {
        'bit': 'EightBitDragon',        
        'futura-light': 'FuturaLight',        
        'futura-medium': 'FuturaMedium',        
      },
      backgroundImage: {
        'castle': "url('./assets/ImgCreatoro trees, on a hill, no le.png')",
        'adventurer': "url('./assets/adventurer.png')",
        'adventurer2': "url('./assets/adventurer-2.png')",
        'level-up': "url('./assets/level-up.png')"
      },
      keyframes: {
        'bounce-left': {
          '0%, 100%': { transform: 'translateX(3px)' },
          '50%': { transform: 'translateX(-3px)' },
        }
      },
      animation: {
        'bounce-left': 'bounce-left 1s ease-in-out infinite',
      }
    },
  },
  'plugins': [],
};
