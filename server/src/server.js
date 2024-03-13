require("dotenv").config();

const express = require("express");
const app = express();


const port = process.env.PORT || 9000;







//Listen server and database connection
const run = async () => {
    app.listen(port, () => {
        console.log(`The server is running http://localhost:${port}`)
    });
}

run();