exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            'path': "home",
            "firstName": "Bob",
            "lastName": "Sager"
        })
    }
}