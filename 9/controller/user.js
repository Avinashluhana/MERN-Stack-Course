const user = require("../model/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const body = req.body;
  const { email, password } = body;

  const loginUser = await user.findOne({ email, password });

  if (loginUser) {
    jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: user._id,
      },
      "secret",
      (err, token) => {
        if (err) {
        } else {
          return res.status(200).json({
            success: true,
            data: [{ user: loginUser }, { token: "Bearer " + token }],
            message: "User logged in successfully",
          });
        }
      }
    );
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
