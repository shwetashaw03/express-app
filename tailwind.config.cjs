module.exports = {
    enabled: process.env.NEXT_PUBLIC_NODE_ENV === 'dev' ? false: true,
    content: ["./views/**/*.{html,ejs}"],
    options: {
      safelist: ['dark'],
    },
  darkMode: 'class',
  theme: {
      extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}