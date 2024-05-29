const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://joaopk06:OhoDephWmFdp5Njp@cluster0.vn9gcjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = { connectDB }
