const mongoose = require("mongoose")

const mongoURL = "mongodb+srv://pratik123:pratik12@cluster0.wp8sjl7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/hotels"

mongoose.connect(mongoURL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection

db.on('connected',() =>{
    console.log('Connected to mongodb server')
})

db.on('err',(err) =>{
    console.log('MongoDb connection error', err)
})

db.on('disconnected',() =>{
    console.log('MongoDB disconnected')
})

module.exports = db;