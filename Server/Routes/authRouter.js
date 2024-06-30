const express = require("express");
require("../Database/Database");

let User = require("../Database/Schemas/UserSchema");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send(req.body);
});

authRouter.post("/newregistration", async (req, res) => {
  const newUser = User(req.body);
  await newUser.save();
  res.json({ success: true, user: newUser });
});

authRouter.post("/checkLogin", async (req, res) => {
  try {
    const loggedInUser = await User.findOne(req.body);
    if (loggedInUser) {
      res.json({ success: true, loggedInUser });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.send("Unable to Log In");
  }
});

module.exports = authRouter;
