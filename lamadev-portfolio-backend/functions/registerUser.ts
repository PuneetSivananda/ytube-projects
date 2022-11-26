import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db/mongoConnect"
import Users from "./models/Users"
import { genSalt, hash } from "bcrypt"

interface IUser {
    username: string
    email: string
    password: string
}


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        let user: IUser
        if (event.httpMethod === 'POST') {
            const salt = await genSalt(10)
            user = JSON.parse(event.body || "{}")
            const hashedPassword = await hash(user?.password, salt)
            const sucess = await connectToDatabase()
                .then(() => {
                    return Users.create({
                        username: user.username,
                        email: user.email,
                        password: hashedPassword
                    })
                })

            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sucess)
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