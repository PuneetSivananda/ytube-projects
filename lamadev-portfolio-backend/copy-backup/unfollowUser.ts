import { Handler, HandlerEvent } from "@netlify/functions";
import errorResponse from "./utils/errorResponse"
import { connectToDatabase } from "./db/mongoConnect"
import Users from "./models/Users"


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const { userId }: any = event.queryStringParameters
    const bodyUser = JSON.parse(event.body || "{}")
    let flag = false
    if (userId !== bodyUser.userId) {
        try {
            await connectToDatabase()
                .then(async () => {
                    const user = await Users.findById(userId)
                    const currentUser = await Users.findById(bodyUser.userId)
                    // @ts-expect-error: Ignore the next line error for body
                    if (user?.followers?.includes(bodyUser.userId)) {
                        await user?.updateOne({ $pull: { followers: bodyUser.userId } })
                        await currentUser?.updateOne({ $pull: { following: userId } })
                        return
                    } else {
                        flag = true
                    }
                })
            if (flag) {
                return {
                    statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "state": "You dont follow the user" },)
                }
            }
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "state": "User has been unfollowed" },)
            }
        } catch (e) {
            return errorResponse(500, JSON.stringify(e))
        }
    }
    else {
        return errorResponse(403, "You cannot unfollow yourself")
    }
}

export { handler }