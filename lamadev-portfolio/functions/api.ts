import { Handler, HandlerEvent } from "@netlify/functions";

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