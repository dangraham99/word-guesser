module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Arial', 'ui-sans-serif', 'system-ui']
      },
      spacing: {
        '15': '3.75rem'
      },
      lineHeight: {

        '15': '3.75rem',
      },
      colors: {
        'tile-correct-green': '#538d4e',
        'tile-exists-yellow': '#b59f3b',
      },

    }
  },
  plugins: [],
}