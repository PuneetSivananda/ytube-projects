import express from "express"
import Pin from "../models/Pin.js"

// const pinModel = require("../models/Pin")
const pinRouter = express.Router()

// create a pin
pinRouter.post("/", async (req, res) => {
    try {
        const newPin = new Pin(req.body)
        const savedPin = await newPin.save()
        res.status(200).json(savedPin)
    } catch (err) {
        res.status(500).json(err)
    }
})
// get all pins

pinRouter.get("/", async (req, res) => {
    try {
        const pins = await Pin.find()
        res.status(200).json(pins)

    } catch (err) {
        res.status(500).json(err)
    }
})


export { pinRouter }