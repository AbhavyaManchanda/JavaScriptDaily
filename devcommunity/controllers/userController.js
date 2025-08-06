const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("..generateToken");

const registerUser = async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName || !emailId || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userExists = await User.find({ emailId });

  if (userExists.length > 0) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    firstName,
    lastName,
    emailId,
    password: hashedPassword,
    updatedAt: Date.now(),
  });

  await user.save();
};

const loginUser = async (req, res) => {
  const { emailId, password } = req.body;

  if (!emailId || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  const userExists = await User.findOne({ emailId });
  console.log(userExists);

  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }

  if (password != userExists.password) {
    return res.status(401).send("Passwword is wrong");
  }

  const isPasswordValid = await bcrypt.compare(password, userExists.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({
    message: "loggin in",
    user: userExists,
  });
};

module.exports = { registerUser, loginUser };
