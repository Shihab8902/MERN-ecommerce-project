const userRoutes = require("./userRoutes");


//Combined all the routes with app
const consumeRoutes = (app) => {
    app.use("/api/users", userRoutes);
}


module.exports = consumeRoutes;