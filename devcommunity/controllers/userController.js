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
         


    // For now, we will just send a success response
    //res.status(201).json({ message: "User registered successfully", user: { name, emailId } });
}

module.exports = registerUser;

const loginUser = (req, res) => {
    const { emailId, password } = req.body;

    if (!emailId || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    // Here you would typically check the user credentials against the database

    // For now, we will just send a success response
    res.status(200).json({ message: "User logged in successfully", user: { emailId } });
    
}