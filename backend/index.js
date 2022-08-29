const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("Mongodb connected!")
    })
    .catch((err) => console.log(err))


app.post("/users/pin", ()=>{
    
})

app.listen(8800, () => {
    console.log("Node Server is Running!")
})