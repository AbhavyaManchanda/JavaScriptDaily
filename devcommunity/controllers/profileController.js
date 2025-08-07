const Profile = require('../models/profileModel');

const addProfileDetails = async (req, res) => {
    const { experience, skills, githubProfile, linkedInProfile, acheivements, codingPlatforms } = req.body;
    
    if(!experience || !skills || !githubProfile || !linkedInProfile || !acheivements || !codingPlatforms) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const profile = await Profile.create({
            experience,
            skills,
            githubProfile,
            linkedInProfile,
            acheivements,
            codingPlatforms
        });

        await profile.save();

        return res.status(201).json({
            message: "Profile Created Successfully",
            data: profile
        });
        
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }



}

const updateProfileDetails = async (req, res) => {

}

module.exports = {
    addProfileDetails,
    updateProfileDetails
};
