/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors:{
                "main-about": "#14ad50",
                "desc-about":"#534343",
                'primary-700': 'red'
            }
        },
    },
    plugins: [require("flowbite/plugin")],
};
