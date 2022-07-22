const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
            },
            backgroundImage: {
                herobg: "url('/images/dinner-bg2.png')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
