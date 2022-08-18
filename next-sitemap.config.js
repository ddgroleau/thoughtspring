module.exports = {
    siteUrl,
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