module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "montserrat": ['Montserrat', 'sans-serif']
    },
    extend: {
      height: {
        "banner": "350px"
      },
      colors: {
        "primary": "#0096E0",
        "secondary": "#7EB942",
        "tertiary": "#07a2ee",
        "custom-black": "#131416",
        "body": "#fff",
      },
      animation: {
        'circle': 'circles 1.3s ease forwards',
        'bar': 'bar 0.5s ease forwards',
        'fadeUp': 'fadeUp 0.3s ease forwards',
      },
      boxShadow: {
        "custom": "0 10px 20px rgba(25,31,61,.1)",
      },
      backgroundImage: {
        "banner": "url('https://i.postimg.cc/nhZNmYdV/bg-mountains.jpg')"
      }
    },
  },
  variants: {
    extend: {
      after: ['animation'],
    }
  },
  plugins: [],
}
