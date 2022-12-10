import { model, Schema, Document } from "mongoose"

const PostSchema = new Schema({
    userId: { type: String, required: true, unique: true, min: 3, max: 20 },
    description: { type: String, max: 500, default: "" },
    img: { type: String, max: 50, default: "" },
    likes: { type: Array, default: [] },
},
    { timestamps: true }
)

export default model<Document>('Post', PostSchema)