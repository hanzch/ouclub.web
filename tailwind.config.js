module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        SortsMillGoudy: ['Sorts Mill Goudy'],
        Poppins: ['Poppins'],
        Cormorant: ['Cormorant'],
      },
  
      container: {
        padding: "20px",
        center: true
      },
      colors:{
        'site-red': '#76261a',
        'site-green': '#283a00',
        'site-yellow': '#f2c94c',
      },
    },
  },
  plugins: [],
  mode: 'jit'
}
