const axios = require('axios').default;

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request with url: ' + req.query.url);

    const url = req.query.url || "https://google.com/";

    const response = await axios.get(url);
    const pageContent = response.body;
    context.res = {
        body: response.data,
        headers: {
            "content-type": "text/html"
        }
    };
}