/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4r": "4rem",
        "3r": "3rem", 
        "2r":"2rem",
        "1/5r": "1.5rem", 
        "72s": "72px",
        "36s": "36px",
        "15s": "15px",
        "18s": "18px",
        "5s": "5px",
      },
      colors: {
        grayf2: "#f2f2f2",
        grayff: "#ffffff71",
        gray79: "#798693",
        blue0a: "#0a2540",
        blue0e2: "#0a2540e2",
        bluebff: "#635bff",
        blue00d: "#00d4ff",
        blueccd: "#5bccde",
        blueele: "rgb(225, 235, 250)",
        blue6ff: "#c6dbff",
        greenba9: "#459ba9",
        green6a6: "#486a6e",
        lightblack: "#3f3f46"
      },

      padding: {
        "20r": "20rem",
        "10r": "10rem",
        "9s": "9px",
        "5s": "5px",
      },

      width: {
        fit: "fit-content",
        "100r": "100rem",
        "40r": "40rem",
        "32r": "32rem",
        "30r": "30rem",
        "25r": "25rem",
        "26r": "26rem",
        "20r": "20rem",
        "18r": "18rem",
        "16r": "16rem",
        "12r": "12rem",
        "5r":"9rem",
        "20x": "200px",
        "50s": "50px",
        "35s": "35px",
        "20s": "25px",
        "16s": "16px",
        "14s": "14px",
        half: "50%",
      },
      height: {
        fit: "fit-content",
        "40r": "40rem",
        "35r": "35rem",
        "30r": "30rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "5r": "5rem",
        "4r": "4rem",
      },
      borderRadius: {
        "1r": "2rem",
        "3s": "3px",
      },
      margin: {
        "40r": "40rem",
        "32r": "32rem",
        "20r": "20rem",
        "8r": "8rem",
      },
      inset: {
        "140r": "140rem",
        "124r": "124rem",
      },
    },
  },
  plugins: [],
}
