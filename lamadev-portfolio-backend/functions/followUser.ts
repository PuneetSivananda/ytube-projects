import { Handler, HandlerEvent } from "@netlify/functions";
import errorResponse from "./utils/errorResponse"

const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const userId = event.path.replace("/.netlify/functions/followUser/", "")
    try {
        console.log(userId)
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "state": "User followed" },)
        }
    } catch (e) {
        return errorResponse(500, JSON.stringify(e))
    }
}

export { handler }