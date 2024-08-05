const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const SECRECT_TOKEN_KEY = "Ksubro@1432!@$";
const verifyToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers["authorization"] || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRECT_TOKEN_KEY, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      // console.log(decoded);
      req.user = decoded;
      console.log(req.user);
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized");
    }
  }
});

module.exports = verifyToken;
