require("dotenv").config();
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [2, "Minimum length for user name is 2 characters!"],
        maxLength: [31, "Maximum length for user name is 31 characters!"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: (v) => {
                return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v)
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [6, , "Minimum length for password is 6!"],
        set: (v) => {
            return bcrypt.hashSync(v, bcrypt.genSaltSync(10));
        }
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        default: process.env.USER_PLACEHOLDER_IMAGE
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    }
});


const userCollection = model("users", userSchema);

module.exports = userCollection;