const { response } = require("express");
const express = require("express");
const app = express();

require("./config/dotEnv");
require("./config/mongodb");

// 3rd Party Modules

// User Defined Modules
const middleware = require("./middleware/middleware");
// const route = require("./route/routes");

const todo = require("./route/routes");
const user = require("./route/user");
// Express Container

// Middleware
app.use(middleware.morgan);
app.use(middleware.bodyParser);
app.use("/", user);
app.use("/", todo);

// Server Listening
app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log(`Server is Running on PORT 3000`);
});
