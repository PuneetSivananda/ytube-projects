import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db/mongoConnect"
import Users from "./models/Users"
import { Document } from "mongoose"
import { compare } from "bcrypt"

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
            const user: Document | any = await connectToDatabase()
                .then(() => {
                    return Users.findOne({ email: email })
                })
            if (!user) return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: "User Not Found"
            }
            const validPassword = await compare(password, user?.password)
            if (!validPassword) return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: "Wrong Password"
            }
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
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