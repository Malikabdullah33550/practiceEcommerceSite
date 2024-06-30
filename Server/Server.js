const express = require("express");
const cors = require("cors");
const authRouter = require("./Routes/authRouter");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());

server.use(express.json());

server.use("/auth", authRouter);

server.get("/", (req, res) => {
  console.log("Api");
  res.status(404).json({
    msg: "hello backend is running",
  });
});

server.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
