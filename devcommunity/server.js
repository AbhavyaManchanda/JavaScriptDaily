const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/userRoute");
const profileRoutes = require("./routes/profileRoute");

const dbConnect = require("./config/db");

//instances
const app = express();

//varibales
const PORT = process.env.PORT || 4500;

app.use(express.json()); // to parse JSON in requests

app.use("/api/user", userRoutes); // MOUNTS the route correctly
app.use("/api/profile", profileRoutes); // MOUNTS the profile route

app.use("/", function (err, req, res, next) {
  res.status(500).json({ message: err.message });
});

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});
