const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

//instances
const app = express();

//varibales
const PORT = process.env.PORT || 4500;
const DATABASE_URL =
    process.env.DATABASE_URL || "mongodb://localhost:27017/devcom";
const DATABASE_NAME = process.env.DATABASE_NAME || "devcom";



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
