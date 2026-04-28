module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F39F6",
        accent: "#101727",
        neutral: "#627382",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #4F39F6 0%, #7B4BFF 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-text": "linear-gradient(90deg, #4F39F6 0%, #9514FA 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};


  