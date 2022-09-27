import mongoose from "mongoose"
import Double from '@mongoosejs/double';
const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true,
        min: 3
    },
    desc: {
        type: String,
        require: true,
        min: 3
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    lat: {
        type: Double,
        require: true
    },
    lng: {
        type: Double,
        require: true
    }
}, { timestamps: true })


const Pin = mongoose.model("Pin", PinSchema)

export default Pin