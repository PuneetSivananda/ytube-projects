import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db"
import Users from "./models/Users"
import { genSalt, hash } from "bcrypt"

interface IUser {
    email: string
    password: string
}


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        if (event.httpMethod === 'POST') {
            const user = await Users.findOne()
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        }
        return {
            statusCode: 400,
            body: "Error in function code"
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