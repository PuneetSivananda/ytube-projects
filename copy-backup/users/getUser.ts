import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "../db/mongoConnect"
import Users from "../models/Users"
import errorResponse from "../utils/errorResponse"



const getHandler: Handler = async (event: HandlerEvent, context, callback: any) => {
    const userId = event.path.replace("/.netlify/functions/users/", "")
    try {
        const user: any = await connectToDatabase()
            .then(() => {
                return Users.findById(userId)
            })
        const { password, updatedAt, __v, ...others } = user?._doc
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "state": "User Found", "user": others },)
        }
    } catch (e) {
        return errorResponse(500, JSON.stringify(e))
    }
}

export default getHandler