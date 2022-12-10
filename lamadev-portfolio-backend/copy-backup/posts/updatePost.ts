import { Handler, HandlerEvent } from "@netlify/functions";


const handler: Handler = async (event: HandlerEvent, context, callback: any) => {

    return {
        statusCode: 200,
        body: "Stub"
    }
}
export default handler