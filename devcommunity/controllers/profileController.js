const Profile = require("../models/profileModel");
const user = require("../models/userModel");
console.log("this is my user model", user);

const getProfileDetails = async (req, res) => {
  try {
    const data = await Profile.find({});
    res.status(200).json({
      message: "Profile Details Fetched Successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const addProfileDetails = async (req, res) => {
  const {
    experience,
    skills,
    githubProfile,
    linkedInProfile,
    acheivements,
    codingPlatforms,
  } = req.body;

  const id = req.user;
  console.log(id);

  const isUser = await user.findOne({ _id: id });
  console.log(isUser);

  if (
    !experience ||
    !skills ||
    !githubProfile ||
    !linkedInProfile ||
    !acheivements ||
    !codingPlatforms
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (!isUser) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const profile = await Profile.create({
      userId: id,
      experience,
      skills,
      githubProfile,
      linkedInProfile,
      acheivements,
      codingPlatforms,
    });

    await profile.save();

    return res.status(201).json({
      message: "Profile Created Successfully",
      data: profile,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateProfileDetails = async (req, res) => {};

module.exports = {
  getProfileDetails,
  addProfileDetails,
  updateProfileDetails,
};
