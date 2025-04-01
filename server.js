const express = require('express');
const rate_of_operations_app = require('./apps/production-rates/rate-of-operations/rate-of-operations-app');

const app = express();
let port = 8080;
async function startApp() {
    app.use(rate_of_operations_app)
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
startApp();
