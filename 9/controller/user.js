const user = require("../model/user");

exports.login = async (req, res) => {
  const body = req.body;
  const {email, password} = body;

  const loginUser = await user.findOne({ email, password });

  if (loginUser) {
    return res.status(200).json({
      message: "login Successfull",
      data: loginUser,
      success: true,
    });
  } else {
    return res.status(404).json({
      message: "user not found",
      success: false,
    });
  }
};
exports.signup = async (req, res) => {
  const body = req.body;
  const signupUser = new user(body);
  const data = await signupUser.save();
  return res.status(200).json({
    message: "User Added ",
    data,
  });
};
