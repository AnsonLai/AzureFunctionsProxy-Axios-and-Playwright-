const axios = require('axios').default;

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request with url: ' + req.query.url);

    const url = req.query.url || "https://google.com/";

    const response = await axios.get(url, 
        {headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36' }});
    const pageContent = response.body;
    context.res = {
        body: response.data,
        headers: {
            "content-type": "text/html"
        }
    };
}