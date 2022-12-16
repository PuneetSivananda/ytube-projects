import { Handler, HandlerEvent } from "@netlify/functions";

import createPost from "./createPost"
import updatePost from "./updatePost"
import deletePost from "./deletePost"
import getPost from "./getPost"


const handler: Handler | any = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    if (event.httpMethod === 'POST') {
        return await createPost(event, context, callback)
    }
    if (event.httpMethod === 'PUT') {
        return await updatePost(event, context, callback)
    }
    if (event.httpMethod === 'DELETE') {
        return await deletePost(event, context, callback)
    }
    if (event.httpMethod === 'GET') {
        return await getPost(event, context, callback)
    }
}


export { handler }