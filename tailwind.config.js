/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "neutral-100": "#e6e6e6",
        "primary-100": "#e6f2ff",
        "off-white": "#f4f4f4",
        "primary-900": "#007bff",
        mediumslateblue: "#5e5bff",
        white: "#fff",
        lightgray: "#d2d2d2",
      },
      spacing: {},
      fontFamily: {
        "display-xs-regular": "Montserrat",
        "body-md-light": "Outfit",
        "body-xs-semibold": "Avenir",
        "display-xl-regular": "'Proxima Nova'",
        "helvetica-now-text-": "'Helvetica Now Text '",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      "29xl": "48px",
      "13xl": "32px",
      xs: "12px",
      lg: "18px",
      "41xl": "60px",
      "21xl": "40px",
      "116xl": "135px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
