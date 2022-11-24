import { Handler, HandlerEvent } from "@netlify/functions";
import { connectToDatabase } from "./db"

const MONGODB_URI = process.env.MONGODB_URI; // or Atlas connection string

function queryDatabase(db) {
    return db.collection('users').find({}).toArray()
        .catch(err => {
            console.log('=> an error occurred: ', err);
            return { statusCode: 500, body: 'error' };
        });
}

const handler: Handler = async (event: HandlerEvent, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            'path': "home",
            "firstName": "Bob",
            "lastName": "Sager"
        })
    }
}

export { handler }