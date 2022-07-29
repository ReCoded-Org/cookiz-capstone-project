const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
                opensans: ["Open Sans", "serif"],
            },
        },
        screens: {
            tablet: { max: "1024px" },
            mobile: { max: "640" },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
