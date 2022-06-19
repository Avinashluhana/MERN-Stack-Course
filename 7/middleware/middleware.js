const morgan = require("morgan");
const bodyParser = require("body-parser");

module.exports = {
  morgan: morgan("tiny"),
  bodyParser: bodyParser.json(),
};
