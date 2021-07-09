module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lightGray: {
                    100: 'hsl(0, 0%, 98%)',
                    200: 'red',
                },
                white: '#FFFFFF',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
