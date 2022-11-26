import { Handler, HandlerEvent } from "@netlify/functions";


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {
    console.log(event.path.replace('/.netlify/functions/posts/', '').replace(/\//gim, ''))
    console.log(event.path.split("/"))
    return {
        statusCode: 200,
        body: "Stub"
    }
}
export default handler