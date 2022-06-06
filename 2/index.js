const express = require("express");
const app = express();

const myData = {
  name: "avinash",
  lastName: "Kumar",
};
app.get("/", function (req, res) {
  res.send(myData);
});
app.post("/", (req, res) => {
  const data = myData;
  res.send(data);
});
app.put("/", (req, res) => {
  myData.name = "Avinash";
  myData.lastName = "Luhana";
  res.send(myData);
});

app.patch("/", (req, res) => {
  myData.name = "Av";
  res.send(myData);
});

app.delete("/", (req, res) => {
  let data = myData.name;
  res.send(data);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running");
  }
});
