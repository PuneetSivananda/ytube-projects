import { Handler, HandlerEvent } from "@netlify/functions";
import updateHandler from "./updateUser"



const handler: Handler | any = async (event: HandlerEvent, context, callback: any) => {
    context.callbackWaitsForEmptyEventLoop = false;
    if (event.httpMethod === 'PUT') {
        return await updateHandler(event, context, callback)
    }
}


export { handler }