require("./config/dotEnv");

// 3rd Party Modules 
const express = require('express');

// User Defined Modules
const middleware = require("./middleware/middleware");
const route = require("./route/routes");

// Express Container
const app = express();

// Middleware
app.use(middleware.morgan);
app.use(middleware.bodyParser);
app.use(route)

// Server Listening
app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log(`Server is Running on PORT 3000`);
});