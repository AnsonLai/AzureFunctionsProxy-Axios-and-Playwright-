# Azure Functions Proxy (Axios and Playwright)

Demo to create an API where you pass in a URL and Azure will respond back with the HTML contents of the page.

Used Axios and Playwright.

## Playwright

https://dotnetthoughts.net/running-playwright-on-azure-functions/#:~:text=This%20post%20is%20about%20Running,%2C%20capable%2C%20reliable%20and%20fast.

Follow that tutorial, make sure to add PLAYWRIGHT_BROWSERS_PATH to 0 in Application settings
Use Linux
Make sure to look at settings.json from this demo, to include scmDoBuildDuringDeployment
