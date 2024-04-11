const handleUserSeeding = require("../controllers/seeding/seedUsers");

const router = require("express").Router();


router.get("/users", handleUserSeeding);


module.exports = router;