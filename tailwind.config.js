/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                bree: ['var(--font-bree)'],
                coquette: ['var(--font-coquette)']
            },
            textColor: {
                linkColor: 'var(--link-color)'
            },
            borderColor: {
                borderColor: 'var(--link-color)'
            },
            textDecorationColor: {
                decorationColor:  'var(--link-color)'
            }
        }
    },
    plugins: [],
}

