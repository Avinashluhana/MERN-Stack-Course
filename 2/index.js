const express = require("express");
const app = express();

const myData = {
  name: "avinash",
  lastName: "Kumar",
};
app.get("/", function (req, res) {
  res.send(myData);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running");
  }
});
