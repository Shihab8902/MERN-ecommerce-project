const userRoutes = require("./userRoutes");
const seedRoutes = require("./seedRoutes");


//Combined all the routes with app
const consumeRoutes = (app) => {
    app.use("/api/users", userRoutes);
    app.use("/api/seed", seedRoutes);
}


module.exports = consumeRoutes;