/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            transitionProperty: {
                width: 'width',
            },
            animation: {
                run: 'run 0.5s linear ',
            },
            keyframes: {
                run: {
                    from: { left: '0%' },
                    to: { left: '100%' },
                },
                toTop: {
                    from: { transform: 'translateY(100vh);' },
                    to: { transform: 'translateY(0);' },
                },
                load: {
                    '0%': { width: '0', left: '0' },
                    '50%': { width: '100%' },
                    '100%': { width: '0', left: '100%' },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },
                zoomOutText: {
                    '0%': { transform: 'scale(2.2)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                zoomOutImage: {
                    '0%': { transform: 'scale(1.6)', opacity: '0.8' },
                    '100%': { transform: 'scale(1.2)', opacity: '1' },
                },
                rightToLeft: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                scrollLine: {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' },
                },
                up: {
                    '0%': { transform: 'translateY(200px)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};
