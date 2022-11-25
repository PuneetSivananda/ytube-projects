import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db"
import Users from "./models/Users"

interface IUser {
    username: string
    email: string
    password: string
}


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        let user: IUser
        if (event.body) {
            user = JSON.parse(event.body)
        }
        const sucess = await connectToDatabase()
            .then(() => {
                return Users.create(user)
            })

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sucess)
        }
    } catch (e) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not create the user.'
        }
    }
}

export { handler }