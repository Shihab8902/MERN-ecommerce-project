require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/ConnectDB");

const port = process.env.PORT || 9000;


//Listen server and database connection
const run = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`The server is running http://localhost:${port}`);
    });
};

run();