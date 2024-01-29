const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ashvins639:mQ2NvZHagrxeTBXH@cluster0.nedo52q.mongodb.net/todo_app")

const  todoSchema =  new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}