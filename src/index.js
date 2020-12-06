const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port, () => {
    console.log('Server is connected on: ', port)
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('5fc5293833f7001ee4629b4c')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    // const user = await User.findById('5fc5292d33f7001ee4629b4a')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}
main()