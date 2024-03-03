const fs = require("fs");

function sitemap(r) {
    const hostname = r.variables["host"];

    const directories = fs.readdirSync("/srv")
        .map(f => [f, fs.statSync(`/srv/${f}`)])
        .filter(d => d[1].isDirectory())
        .map(d => {
            const directoryName= d[0];
            const stats = d[1];
            const modifiedTime = new Date(stats.mtime);
            return `<url><loc>https://${hostname}/${directoryName}/</loc><lastmod>${modifiedTime.toISOString().split("T")[0]}</lastmod></url>`;
        });

    const sitemapData = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
        ${directories.join('')}
        </urlset>
    `.replace("\n", "");

    r.headersOut["content-type"] = "application/xml";

    r.return(200, sitemapData);
}

export default {sitemap};
