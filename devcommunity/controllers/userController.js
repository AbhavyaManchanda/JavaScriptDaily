const User=require("../models/userModel");

const registerUser = async(req,res) => {
    const { name, emailId, password } = req.body;

    if (!name || !emailId || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Here you would typically save the user to the database
     
     const user = new User({
        "firstName": "Pransh",
        "lastName": "Maurya",
        "emailId": "pransh@gmail.com",
        "password": "Pransh@123"
    })

    await user.save();
}



const loginUser = async(req, res) => {
    const { emailId, password } = req.body;

    if (!emailId || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const userExists = await User.findOne({ emailId });
    if (!userExists) {
        return res.status(404).json({ message: "User not found" });
    }
}

module.exports = {loginUser, registerUser};