/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6edf4",
          100: "#c0d4e5",
          200: "#99bbd6",
          300: "#73a2c7",
          400: "#4c89b8",
          500: "#2670a9",
          600: "#1f5a87",
          700: "#174365",
          800: "#0f2d43",
          900: "#081722",
        },
      },
      typography: (theme) => ({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
      }),
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /grid-cols-\d+/,
    },
    {
      pattern: /gap-\d+/,
    },
    {
      pattern: /flex-(row|col)/,
    },
    {
      pattern: /justify-(start|center|end|between|around|evenly)/,
    },
    {
      pattern: /items-(start|center|end|baseline|stretch)/,
    },
    {
      pattern:
        /(flex|justify|items|gap)-(row|col|start|center|end|between|around|evenly|baseline|stretch|\d+)(-(sm|md|lg|xl|2xl))?/,
    },
    {
      pattern:
        /^(stroke|text|w|h)-(gray|red|yellow|green|blue|indigo|purple|pink|black|white|current|transparent|[0-9]+)-[0-9]{1,3}$/,
      variants: ["responsive", "hover", "focus", "active"],
    },
    {
      pattern: /^(bg|text|hover:bg|ring|w|h)-(gray|red|yellow|green|blue|indigo|purple|pink|black|white|current|transparent|orange)-[0-9]{1,3}$/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
  ],
};
