const express = require('express');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express();

const userRouter = require('./Routes/UserRoute')

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL


app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser())


mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas', err));

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB Atlas');
});

app.use('/client',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})