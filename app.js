const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const notFound = require('./middleware/not-found.js')
const { connectDB } = require('./db/connect')

//middleware, usado para pegar os dados em REQ.BODY
app.use(express.json())


//rota principal que será direcionada ao acessar o localhost
app.get('/', (req, res) => {
    res.send('Task Manager APP')
})

app.use('/api/v1/tasks', tasks )

app.use('/api/v1/hello', notFound)

const start = async () => {
    try {
       await connectDB(() => {return console.log(`Connected to the database`)})
       app.listen(port, console.log(`listening on port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}

start()


const port = 3000