const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', ()=>console.log("Mongodb is not connected!"))
db.once('open', ()=>console.log("Mongodb is connected successfully!"))