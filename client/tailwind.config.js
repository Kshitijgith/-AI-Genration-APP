/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',   // Changing 'sm' to 600px
        'md': '500px',   // Keeping 'md' at 768px
        'lg': '1024px',  // Keeping 'lg' at 1024px
        'xl': '1280px',  // Keeping 'xl' at 1280px
        '2xl': '1536px', // Keeping '2xl' at 1536px
        '3xl': '1600px', // Adding a custom breakpoint for very large screens
        '4xl': '1920px', // Adding another custom breakpoint
      },
      spacing: {
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',
        '25p': '25%',
        '30p': '30%',
        '35p': '35%',
        '40p': '40%',
        '45p': '45%',
        '50p': '50%',
        '55p': '55%',
        '60p': '60%',
        '65p': '65%',
        '70p': '70%',
        '75p': '75%',
        '80p': '80%',
        '85p': '85%',
        '90p': '90%',
        '95p': '95%',
        '100p': '100%',
      },
    },
  },
  plugins: [],
}


