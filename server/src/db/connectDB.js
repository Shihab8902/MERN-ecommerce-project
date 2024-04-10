require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
        console.log("Connection equipped with MongoDB database successfully!");

        mongoose.connection.on("error", (error) => {
            console.error(error.message)
        })
    }
    catch (error) {
        console.log("Connection to Database failed with error", error)
    }
}


module.exports = connectDB;