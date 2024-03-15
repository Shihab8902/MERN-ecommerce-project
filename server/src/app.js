const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require('http-errors');
const helmet = require("helmet");
const consumeRoutes = require("./routes/index");


//Middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Testing route
app.get("/test", (req, res) => {
    res.send({ message: "The server is up and running...." });
});

//Consume all the routes
consumeRoutes(app);



//Error handling middleware for client
app.use((req, res, next) => {
    next(createError(404, "Requested route does not exist!"));
});


//Error handling middleware for server
app.use((err, req, res, next) => {
    return res.status(err.status || 500).send({
        success: false,
        message: err.message || "Internal server error!"
    });
});




module.exports = app;