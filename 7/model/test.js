const mongoose = require ("mongoose");

const Schema = mongoose.Schema;


const Todo = new Schema ({
    title: {type: String, required: true},
    list: Array,
    delete: {type: Boolean, default: false}
})


module.exports = mongoose.model('Todo', Todo);
