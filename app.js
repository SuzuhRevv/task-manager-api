const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')

//middleware, usado para pegar os dados em REQ.BODY
app.use(express.json())


//rota principal que será direcionada ao acessar o localhost
app.get('/', (req, res) => {
    res.send('Task Manager APP')
})

app.use('/api/v1/tasks', tasks )

const port = 3000
app.listen(port, console.log(`listening on port ${port}...`))