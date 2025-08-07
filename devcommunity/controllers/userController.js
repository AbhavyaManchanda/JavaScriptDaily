const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// const generateToken = require("..generateToken");

const registerUser = async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;


  if (!firstName || !lastName || !emailId || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try{
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = await User.create({
      firstName,
      lastName,
      emailId,
      password: hashedPassword,
      
    });

    await user.save();

        return res.status(201).json({
          message: "User Registered Successfully",
          data: {
            firstName,
            emailId,
            hashedPassword,
          },
      });
    }catch (err) {
      return res.status(500).json({ error: err.message });
    }

};

const loginUser = async (req, res) => {
  const { emailId, password } = req.body;

  if (!emailId || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  const userExists = await User.findOne({ emailId });
   

  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }

  // if (password != userExists.password) {
  //   return res.status(401).send("Passwword is wrong");
  // }


  try {
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({
    message: "loggin in",
    user: userExists,
  });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
  
};

module.exports = { registerUser, loginUser };
