const defaultTheme = require("tailwindcss/defaultTheme");
const {nextui} = require("@nextui-org/react");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./modals/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {

    
      colors: {
        gradientPinkYellow: 'bg-gradient-to-r from-[#FFC530] to-[#FF4546]',
        gradientBluePurple: 'bg-gradient-to-r from-[#37B7FF] to-[#5376F1]',
        gradientYellowGreen: 'bg-gradient-to-r from-[#FFD553] to-[#CDEBA6]',
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors,nextui()],

};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
