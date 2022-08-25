module.exports = {
    siteUrl: `https://thoughtspringcreative.com`,
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `https://thoughtspringcreative.com/sitemap.xml`,
        ],
    },
};