import { Handler, HandlerEvent } from "@netlify/functions";
import updateHandler from "./updateUser"
import deleteHandler from "./deleteUser"


const handler: Handler | any = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    if (event.httpMethod === 'PUT') {
        return await updateHandler(event, context, callback)
    }
    if (event.httpMethod === 'DELETE') {
        return await deleteHandler(event, context, callback)
    }
}


export { handler }