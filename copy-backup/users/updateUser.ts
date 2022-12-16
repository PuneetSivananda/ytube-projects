import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "../db/mongoConnect"
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


const updateHandler: Handler = async (event: HandlerEvent, context, callback: any) => {
    const userId = event.path.replace("/.netlify/functions/users/", "")
    console.log(userId)
    const requestBody: IUpdateUser = JSON.parse(event.body || "{}")

    if (requestBody.userId === userId) {
        if (requestBody.password) {
            console.log("password provided")
            try {
                const salt = await genSalt(10)
                requestBody.password = await hash(requestBody.password, salt)
            } catch (e) {
                return errorResponse(500, "Error hashing Password")
            }
        } else {
            console.log("password not provided")
        }
        try {
            const user = await connectToDatabase()
                .then(() => {
                    return Users.findByIdAndUpdate(userId, {
                        $set: requestBody
                    })
                })
            const updatedUser = await connectToDatabase()
                .then(() => {
                    return Users.findById(userId)
                })
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "state": "Account has been updated", "user": updatedUser },)
            }
        } catch (e) {
            return errorResponse(500, JSON.stringify(e))
        }
    }
    return {
        statusCode: 400,
        body: "Error in function code"
    }
}
export default updateHandler