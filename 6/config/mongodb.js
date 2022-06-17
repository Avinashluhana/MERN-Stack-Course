const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test').then((response) => {
    console.log("Database connected");
}).catch((err ) => {
    console.log(err);

})