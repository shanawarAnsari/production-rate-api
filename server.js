const express = require('express');

const app = express();
let port = 8080;
async function startApp() {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
startApp();
