import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    profilePricture: { type: String, default: "" },
    coverPricture: { type: String, default: "" },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
},
    { timestamps: true }
)

export default model<any>('Users', UserSchema)