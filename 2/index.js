const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello me");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running");
  }
});
