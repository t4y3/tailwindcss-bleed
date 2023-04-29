const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      bleed: (value) => {
        return {
          display: "grid",
          "grid-template-columns": `1fr calc(100% - ${value}) 1fr`,
          "& > *": {
            "grid-column-start": "2",
            "grid-column-end": "2",
          },
          "& > .bleed-none": {
            "grid-column-start": "1",
            "grid-column-end": "-1",
          },
        };
      },
    },
    { values: theme("spacing") }
  );
});
