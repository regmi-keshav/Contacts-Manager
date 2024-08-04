const express = require("express");
const {
  login,
  registerUser,
  currentUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/login", login);
router.post("/register", registerUser);
router.get("/current", currentUser);

module.exports = router;
