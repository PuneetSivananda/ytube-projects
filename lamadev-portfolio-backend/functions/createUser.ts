import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db"
import Users from "./models/Users"

const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let user
    if (event.body) {
        user = JSON.parse(event.body)
    }

    try {
        const sucess = await connectToDatabase()
            .then(() => {
                return Users.create(user)
            })

        return {
            statusCode: 200,
            body: JSON.stringify(sucess)
        }
    } catch (e) {
        return {
            statusCode: e.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not create the user.'
        }
    }

}

export { handler }