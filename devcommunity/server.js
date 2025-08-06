const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoute");  
const mongoose = require("mongoose");

const dbConnect = require("./config/db");  

//instances
const app = express();

//varibales
const PORT = process.env.PORT || 4500;

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/devcom";
const DATABASE_NAME = process.env.DATABASE_NAME || "devcom";


app.use(express.json()); // to parse JSON in requests


app.use("/api/user", userRoutes); // MOUNTS the route correctly

const serverStarted = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL)
      .then(() => console.log("connected to database : " + DATABASE_NAME));

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

serverStarted();
