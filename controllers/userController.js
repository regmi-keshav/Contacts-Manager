const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc Get User
//@route POST /api/contacts/
//@access public

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    res.status(400);
    throw new Error("Please provide all fields");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid email or password");
  }
  console.log(user);
  if (
    user &&
    (await bcrypt.compare(password, user.password, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Invalid password");
      }
      console.log(user);
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          name: user.name,
        },
        process.env.SECRECT_TOKEN_KEY,
        { expiresIn: "10m" }
      );
      res.status(200).json({ token });
    }))
  )
    res.status(200).json({ message: "User Details" });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  console.log(userExists);
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  console.log(`User Created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400).json({ message: "User data is not valid" });
  }
  res.status(201).json({ message: "User Created" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { login, registerUser, currentUser };
