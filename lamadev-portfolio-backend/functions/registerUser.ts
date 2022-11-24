import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db"
import Users from "./models/Users"

const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    let user: {
        username: string,
        password: string,
        email: string
    }
    console.log(event)
    console.log(event.httpMethod)
    if (event.body) {
        console.log(JSON.parse(event.body))
        // user = JSON.parse(event.body)
        // // if correct write to db
        // console.log(user.username)
    }

    return {
        statusCode: 200
    }

    // return connectToDatabase()
    //     .then(() => {
    //         Users.create(user)
    //             .then(() =>
    //                 callback(null, {
    //                     statusCode: 200,
    //                     body: JSON.stringify(user)
    //                 })
    //             )
    //     })
    //     .catch(err =>
    //         callback(null, {
    //             statusCode: err.statusCode || 500,
    //             headers: { 'Content-Type': 'text/plain' },
    //             body: 'Could not create the user.'
    //         })
    //     );
}

export { handler }