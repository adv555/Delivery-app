const REM_SIZE = 16;
const pxToRem = (px) => `${px / REM_SIZE}rem`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          light: "#FEEFD0",
          dark: "#FFB30E",
          accent: "#F17228",
          accent2: "#f9c09f",
        },
        text: {
          title: "#212121",
          notification: "#79B93C",
          light: "#757575",
          dark: "#434343",
          accent: "#F17228",
        },
      },
      boxShadow: {
        card: "0px 4px 16px rgba(29, 101, 137, 0.15)",
        dashboard: "0px 1px 0px rgba(229, 229, 229, 0.75)",
        header:
          "0px 5px 10px rgba(255, 174, 0, 0.26), 0px 20px 40px rgba(255, 174, 0, 0.29)",
      },
      fontSize: {
        h1: [pxToRem(32), pxToRem(42)],
        h2: [pxToRem(28), pxToRem(40)],
        h3: [pxToRem(24), pxToRem(32)],
        h4: [pxToRem(20), pxToRem(30)],
        "Ag-18": [pxToRem(18), pxToRem(27)],
        "Ag-16": [pxToRem(16), pxToRem(20)],
        "Ag-15": [pxToRem(15), pxToRem(22)],
        "Ag-14": [pxToRem(14), pxToRem(21)],
        "Ag-13": [pxToRem(13), pxToRem(21)],
        "Ag-12": [pxToRem(12), pxToRem(18)],
        "Ag-10": [pxToRem(10), pxToRem(18)],
      },
    },
  },
  plugins: [],
};
