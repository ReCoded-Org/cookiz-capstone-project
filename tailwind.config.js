const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#004945",
                signUpImageColor: "#FDFCEA",
            },
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
                secondary: {
                    100: "#E2E2D5",
                    200: "#888883",
                },
            },
        },
        screens: {
            tablet: { max: "1024px" },
            mobile: { max: "640" },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
