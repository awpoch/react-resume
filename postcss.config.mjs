/** @type {import('postcss').ProcessOptions} */
const config = {
    plugins: {
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
        "postcss-preset-env": {
            features: { "nesting-rules": false },
        },
        ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
};

export default config;
