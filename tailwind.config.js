/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        sm: "320px",
        md: "568px",
        lg: "768px",
        xl: "1112px",
        extend: {},
        colors: {
            "primary-Color": "#69a2b0",
            "background-Color": "#ffcab1",
            "extra": "#659157"
        }
    },
    plugins: [],
}