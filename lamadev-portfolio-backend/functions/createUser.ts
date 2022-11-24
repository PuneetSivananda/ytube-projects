import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db"
import Users from "./models/Users"

const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let user = {
        username: "tester",
        email: "tester@testing.com",
        password: "123456"
    };

    connectToDatabase()
        .then(() => {
            Users.create(user)
                .then(note =>
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify(user)
                    })
                )
        })
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the todoitem.'
            })
        );
    return {
        statusCode: 200,
        body: JSON.stringify({
            'path': "home",
            "firstName": "Bob",
            "lastName": "Sager",
        })
    }
}

export { handler }