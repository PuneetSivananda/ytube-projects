import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "../db"
import Users from "../models/Users"
import { Document } from "mongoose"
import { genSalt, hash } from "bcrypt"

import errorResponse from "../utils/errorResponse"

interface IUpdateUser {
    email: string,
    userId: string,
    isAdmin: boolean,
    password: string
}


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        if (event.httpMethod === 'PUT') {
            const userId = event.path.replace("/.netlify/functions/users/", "")
            console.log(userId)
            const requestBody: IUpdateUser = JSON.parse(event.body || "{}")

            if (requestBody.userId === userId) {
                if (requestBody.password) {
                    try {
                        const salt = await genSalt(10)
                        requestBody.password = await hash(requestBody.password, salt)
                    } catch (e) {
                        return errorResponse(500, "Error hashing Password")
                    }

                    try {
                        const user = await Users.findByIdAndUpdate(userId, {
                            $set: requestBody
                        })
                        return {
                            statusCode: 200,
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ "state": "Account has been updated" })
                        }
                    } catch (e) {
                        return errorResponse(500, JSON.stringify(e))
                    }

                } else {
                    return errorResponse(403, JSON.stringify({ "state": "You can only update your accounr" }))
                }
            }
        }
        return {
            statusCode: 400,
            body: "Error in function code"
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Wrong Request Type | could not update user'
        }
    }
}

export { handler }