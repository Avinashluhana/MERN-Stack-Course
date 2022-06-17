const Test = require("../model/test");
exports.postTodo = async (req, res) => {
  const body = req.body;
  const test = new Test(body);
  const data = await test.save();

  // const kitty = new Cat({ name: 'Zildjian' });
  // kitty.save().then(() => console.log('meow'));

  return res.status(200).json({
    message: " data is saved ",
    data,
  });
};

exports.getTodo = async (req, res) => {
  const body = req.body;
  const getData = await Test.findOne({ name: "Avinash Kumar" });
  console.log(getData);
  return res.status(200).json({
    message: "data is retrieved",
    getData,
  });
};
