const express = require("express");
const { addProfileDetails,getProfileDetails ,updateProfileDetails} = require("../controllers/profileController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();


router.post("/", authMiddleware, addProfileDetails);
 
router.get("/", authMiddleware, getProfileDetails);

router.post("/update", authMiddleware, updateProfileDetails);

 

module.exports = router;