const express = require("express");
const users = require("./data/users");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/user", (req, res) => {
  res.json(users);
});

app.get("/api/user/:id", (req, res) => {
  const user = users.find((n) => n.rollNumber === req.params.id);
  res.send(user);
});

const PORT = process.env.PORT || 9090;

app.listen(PORT, console.log(`Server stared at port ${PORT}`));
