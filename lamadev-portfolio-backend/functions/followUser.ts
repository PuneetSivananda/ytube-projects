import { Handler, HandlerEvent } from "@netlify/functions";
import errorResponse from "./utils/errorResponse"
import { connectToDatabase } from "./db/mongoConnect"
import Users from "./models/Users"


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const { userId }: any = event.queryStringParameters
    console.log(userId)
    const bodyUser = JSON.parse(event.body || "{}")
    let flag = false
    if (userId !== bodyUser.userId) {
        try {
            console.log(flag)
            await connectToDatabase()
                .then(async () => {
                    const user = await Users.findById(userId)
                    const currentUser = await Users.findById(bodyUser.userId)
                    if (!user?.followers?.includes(bodyUser.userId)) {
                        await user?.updateOne({ $push: { followers: bodyUser.userId } })
                        await currentUser?.updateOne({ $push: { following: bodyUser.userId } })
                        return
                    } else {
                        flag = true
                    }
                })

        } catch (e) {
            return errorResponse(500, JSON.stringify(e))
        }
    } else {
        return errorResponse(403, "You cannot follow yourself")
    }
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "state": "User Already followed" },)
    }

}

export { handler }