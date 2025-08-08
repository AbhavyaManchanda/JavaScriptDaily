const express = require("express");
const { addProfileDetails,getProfileDetails } = require("../controllers/profileController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();


router.post("/", authMiddleware, addProfileDetails);
 
router.get("/", authMiddleware, getProfileDetails);
 

module.exports = router;