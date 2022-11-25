import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db"
import Users from "./models/Users"

const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    let user
    if (event.body) {
        user = JSON.parse(event.body)
        console.log(user)
    }
    return connectToDatabase()
        .then(() => {
            Users.create(user)
                .then(() =>
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify(user)
                    })
                )
        })
        .catch(err => {
            console.log(err)
            return callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the user.'
            })
        }

        );
}

export { handler }