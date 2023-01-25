/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto Mono", "monospace"],
            },
            colors: {
                primaryRed: "#F5385D",
            },
        },
    },
    plugins: [],
};
