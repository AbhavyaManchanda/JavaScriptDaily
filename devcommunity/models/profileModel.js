const mongoose = require("mongoose");
const {Schema} = mongoose;

const ProfileSchema = mongoose.Schema(
  {
    experience: { type: String, required: true },
    skills: { type: [String], required: true },
    githubProfile: { type: String, required: true },
    linkedInProfile: { type: String, required: true },
    acheivements: { type: String, required: true },
    codingPlatforms: { type: [String], required: true },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", ProfileSchema);