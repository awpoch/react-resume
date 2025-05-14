/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        const oneOfRule = config.module.rules.find((rule) => rule.oneOf);

        // Next 12+ has multiple TS loaders. Update all of them.
        const tsRules = oneOfRule.oneOf.filter(
            (rule) => rule.test && rule.test.toString().includes("tsx|ts")
        );

        tsRules.forEach((rule) => {
            rule.include = undefined;
        });

        return config;
    },
    compress: true,
    generateEtags: true,
    pageExtensions: ["tsx", "mdx", "ts"],
    poweredByHeader: false,
    productionBrowserSourceMaps: false,
    reactStrictMode: true,
    trailingSlash: false,
    images: {
        domains: ["images.unsplash.com", "source.unsplash.com"],
    },
};

export default nextConfig;
