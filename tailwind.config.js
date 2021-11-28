module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '999': '999', 
      },
      display: ["group-hover"],

      spacing: {
        '98': '40rem',
        'sidebar': '28rem',
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    backgroundImage: {
      'banner-one': "url('http://localhost:3000/static/media/banner-nd.675b194a.jpg')",
      'banner-two': "url('http://localhost:3000/static/media/banner-rd.5b0810a4.jpg')",
      'banner-three': "url('http://localhost:3000/static/media/banner-st.57953e4d.jpg')",
      'banner-product': "url('http://localhost:3000/static/media/banner.10879cd6.jpg')",
      'step-1': "url('http://localhost:3000/static/media/arrow-1.e50b7ddf.png')",
      'step-2': "url('http://localhost:3000/static/media/arrow-2.7a8b4722.png')",
      'step-3': "url('http://localhost:3000/static/media/arrow-3.efc3debf.png')",
    },

    fontFamily: {
      'pango': ['pangolin', 'cursive']
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    scale: {
      '0': '0',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
     '95': '.95',
      '100': '1',
     '105': '1.05',
     '110': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '80',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
