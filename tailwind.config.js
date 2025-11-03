/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
