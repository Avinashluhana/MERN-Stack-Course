exports.getTodo = (req, res) => {
  const query = req.query;
  const todo = {
    title: query.title,
    list: query.list,
  };
  return res.status(200).json(todo);
};

exports.postTodo = (req, res) => {
  const body = req.body;
  const todo = {
    title: body.title,
    list: body.list,
  };
  return res.status(200).json(todo);
};

exports.putTodo = (req, res) => {
  const body = req.body;
  const todo = {
    title: "todochanged",
    list: ["todo3", "todo4"],
  };
  return res.status(200).json(todo);
};
exports.patchTodo = (req, res) => {
  const todo = {
    title: "todochangedAgain",
  };
  return res.status(200).json(todo);
};

exports.deleteTodo = (req, res) => {
  const todo = {
    title: title,
    list: list,
  };
  return res.status(200).json(todo);
};
