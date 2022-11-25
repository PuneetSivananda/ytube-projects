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
            const requestBody: IUser = JSON.parse(event.body || "{}")
            const { email, password } = requestBody
            console.log(email, password)
            const users = await connectToDatabase()
                .then(() => {
                    return Users.findOne({ email: email })
                })
            console.log(users)
            if (!users) return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: "User Not Found"
            }
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(users)
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
            body: 'Could not login user!, User not found'
        }
    }
}

export { handler }