const getUsers = require("../controllers/users/getUsers");

const router = require("express").Router();


//Get all users
router.get("/", getUsers);


module.exports = router;