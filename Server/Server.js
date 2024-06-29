const express = require("express");
// const cors = require("cors");
const authRouter = require("./Routes/authRouter");
const server = express();
server.use(express.json());
server.use("/auth", authRouter);
const PORT = process.env.PORT || 8200;
// server.use(cors());
server.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
