require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");


const port = process.env.PORT || 9000;



//Middlewares
app.use(morgan("dev"));





//Testing route
app.get("/test", (req, res) => {
    res.send({ message: "The server is up and running...." });
});



//Listen server and database connection
const run = async () => {
    app.listen(port, () => {
        console.log(`The server is running http://localhost:${port}`);
    });
};

run();