const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello me");
});

app.listen(3000);
