const registerUser = require("../controllers/userController");
const loginUser = require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;
