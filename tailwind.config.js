module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        poppins: "Poppins, sans-serif",
        roboto: "Roboto, sans-serif",

      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'primary' : '#FD3D57',
        'secondary' : '#2B2D42',
      }
    },  
  },  
  plugins: [
    require('@tailwindcss/forms'),
  ],
}