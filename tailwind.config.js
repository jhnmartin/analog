const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        mono: [" 'Jetbrains' ", ...defaultTheme.fontFamily.mono],
        sans: [" 'CraftworkSans' ", ...defaultTheme.fontFamily.sans],
        display: [" 'CraftworkGrot' "],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
