const mongoose = require("mongoose");

const Schema = moongoose.Schema;

const user = new Schema ({
    email : {type: String, required: true}, unique: true,
    password: {type: String, required: true}
})


module.exports = mongoose.model("user", user)