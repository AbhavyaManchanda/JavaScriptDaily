const jwt = require("jsonwebtoken");
const user = require("../models/userModel");
const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(authorization);

  const token = authorization && authorization.split(" ")[1];

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decode);

  if (!decode) {
    res.status(401).json({
      message: "Unauthorized access. Please login again.",
    });
  }

  const _Id = decode.userId;
  const isDataAvail = await user.findById(_Id);
  if (!isDataAvail) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log(isDataAvail);

  req.user = _Id;
  console.log(req.user);
  next();
};

module.exports = { authMiddleware };
