const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Tester",
                    last: "Coder"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/2.jpg",

                },
                login: {
                    username: "TesterTesing",
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}