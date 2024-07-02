/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mainColor: 'var(--main-color)',
                secondaryColor: 'var(--secondary-color)',
                linkColor: 'var(--link-color)'
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
                bree: ['var(--font-bree)'],
                coquette: ['var(--font-coquette)']
            },
            textColor: {
                mainColor: 'var(--main-color)',
                secondaryColor: 'var(--secondary-color)',
                linkColor: 'var(--link-color)'
            },
            borderColor: {
                mainColor: 'var(--main-color)',
                secondaryColor: 'var(--secondary-color)',
                borderColor: 'var(--link-color)'
            },
            textDecorationColor: {
                mainColor: 'var(--main-color)',
                secondaryColor: 'var(--secondary-color)',
                decorationColor:  'var(--link-color)'
            }
        }
    },
    plugins: [],
}

