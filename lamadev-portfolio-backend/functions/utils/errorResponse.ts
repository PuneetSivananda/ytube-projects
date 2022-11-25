const errorResponse = (statusCode: number, body: string) => {
    return {
        statusCode: statusCode,
        headers: { 'Content-Type': 'text/plain' },
        body: body
    }
}

export default errorResponse