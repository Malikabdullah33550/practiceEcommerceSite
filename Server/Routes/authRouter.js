const express = require("express");
require("../Database/Database");
const User = require("../Database/Schemas/UserSchema");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send(req.body);
});

authRouter.post("/newregistration", async (req, res) => {
  const newUser = User(req.body);
  await newUser.save();
  res.json({ success: true, user: newUser });
});

module.exports = authRouter;
