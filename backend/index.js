require('dotenv').config()
require('./config/connection')
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')

const router = require('./routes/routes')

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(router)



//server running
app.listen(port, () => {
    console.log(`Backend is running on the port ${port}`);
})