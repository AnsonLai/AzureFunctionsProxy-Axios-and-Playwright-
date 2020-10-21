const { chromium } = require("playwright-chromium");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request with url: ' + req.query.url);

    const url = req.query.url || "https://google.com/";
    const browser =  await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const pageContents = await page.content();
    await browser.close();

    // const pageContents = url

    context.res = {
        body: pageContents,
        headers: {
            "content-type": "text/html"
        }
    };
}