import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "../db/mongoConnect"
import Users from "../models/Users"
import { Document } from "mongoose"
import { genSalt, hash } from "bcrypt"
import errorResponse from "../utils/errorResponse"

interface IDeleteUser {
    email: string,
    userId: string,
    isAdmin: boolean,
    password: string
}


const deleteHandler: Handler = async (event: HandlerEvent, context, callback: any) => {
    const userId = event.path.replace("/.netlify/functions/users/", "")
    console.log(userId)
    const requestBody: IDeleteUser = JSON.parse(event.body || "{}")

    if (requestBody.userId === userId) {
        try {
            const user = await connectToDatabase()
                .then(() => {
                    return Users.findByIdAndDelete(userId)
                })
            console.log(user)

            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "state": "Account has been deleted successfully!" },)
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
export default deleteHandler