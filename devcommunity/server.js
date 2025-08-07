const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/userRoute");  


const dbConnect = require("./config/db");  

//instances
const app = express();

//varibales
const PORT = process.env.PORT || 4500;

// const DATABASE_URL =
//   process.env.DATABASE_URL || "mongodb://localhost:27017/devcom";
// const DATABASE_NAME = process.env.DATABASE_NAME || "devcom";


app.use(express.json()); // to parse JSON in requests


app.use("/api/user", userRoutes); // MOUNTS the route correctly

app.use("/", function (req, res) {
  res.status(500).json({ message: err.message });
});

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});
