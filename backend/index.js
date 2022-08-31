import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { pinRouter } from "./routes/pins.js"
import { userRouter } from "./routes/Users.js"
const app = express()
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("Mongodb connected!")
    })
    .catch((err) => console.log(err))


// app.post("/users/pin", () => {

// })

app.use("/api/pins", pinRouter)
app.use("/api/users", userRouter)

app.listen(8800, () => {
    console.log("Node Server is Running!")
})