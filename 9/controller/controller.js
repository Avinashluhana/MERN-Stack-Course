const Todo = require("../model/test");

exports.getTodo = async (req, res) => {
  const query = req.query;
  const data = await Todo.findOne({
    title: query.title,
    delete: false,
  });

  if (data) {
    res.send(200).json({
      message: "Todo list",
      data,
    });
  } else {
    res.status(500).json({
      message: "Todo Not Found",
    });
  }
};

exports.postTodo = async (req, res) => {
  const body = req.body;
  const todo = new Todo(body);
  const data = await todo.save();
  return res.status(200).json({
    message: "Todo Added",
    data,
  });
};

exports.putTodo = async (req, res) => {
  const body = req.body;
  const updateTodo = await Todo.findOneAndUpdate(body, {
    title: "abc",
    list: ["123", "456"],
  });
  if (updateTodo) {
    return res.status(200).json({
      message: "My Todo",
      data: updateTodo,
    });
  } else {
    return res.status(500).json({
      message: "Todo Not Found",
    });
  }
};

exports.patchTodo = async (req, res) => {
  const body = req.body;
  const updateTodo = await Todo.findOneAndUpdate(
    body,
    { title: "xyz" },
    { new: true }
  );
  if (updateTodo) {
    return res.status(200).json({
      message: "My Todo",
      data: updateTodo,
    });
  } else {
    return res.status(500).json({
      message: "Todo Not Found",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  const body = req.body;
  const updateTodo = await Todo.findOneAndUpdate(
    body,
    { delete: true },
    { new: true }
  );
  if (updateTodo) {
    return res.status(200).json({
      message: "My Todo",
      data: updateTodo,
    });
  } else {
    return res.status(500).json({
      message: "Todo Not Found",
    });
  }
};
