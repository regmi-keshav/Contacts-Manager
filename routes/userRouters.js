const express = require("express");
const {
  login,
  registerUser,
  currentUser,
} = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post("/login", login);
router.post("/register", registerUser);
router.get("/current", verifyToken, currentUser);

module.exports = router;
