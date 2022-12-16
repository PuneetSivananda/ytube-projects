import { model, Schema, Document } from "mongoose"

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    profilePricture: { type: String, default: "" },
    coverPricture: { type: String, default: "" },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    description: { type: String, max: 50, default: "" },
    city: { type: String, max: 50, default: "" },
    from: { type: String, max: 50, default: "" },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
        default: 1
    }

},
    { timestamps: true }
)

export default model<Document>('Users', UserSchema)