const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Task Manager APP')
})

const port = 3000
app.listen(port, console.log(`listening on port ${port}...`))