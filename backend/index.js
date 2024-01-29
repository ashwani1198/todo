const express = require('express')
const { createTodo,updateTodo } =  require("./types")
const { todo } = require('./db')
const app = express()


const port = 3000
app.use(express.json())

app.post('/todo',async function(req, res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
    }
    await todo.create({
        title : createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"todo"
    })


})

app.get('/todos', async function(req, res){
    const todos = await todo.find({})

    res.json({
        todos
    })
})

app.put('/completed',async function(req, res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
    }

    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg :  `todo - ${req.body.id} marked as completed successfully`
    })

})

app.listen(port, () => {
    console.log(`Todo app listening on port ${port}`)
})