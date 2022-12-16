import { Handler, HandlerEvent } from "@netlify/functions";
import errorResponse from "../utils/errorResponse"
import { connectToDatabase } from "../db/mongoConnect"
import Post from "../models/Post"

const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    const newPost = new Post(event.body)
    try {
        const savedPost = await connectToDatabase().then(async ()=>{
            return await Post.create({
                
            })
        })
    } catch (err) {
        return errorResponse(500, JSON.stringify(err))
    }
    return {
        statusCode: 200,
        body: "Stub"
    }
}
export default handler