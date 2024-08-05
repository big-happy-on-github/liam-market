const products = {
    "U3VnYXJjYW5lIFN0aWNrcyAoNCBwYWNrKQ==": { name: "Sugarcane Sticks (4 pack)", img: "https://via.placeholder.com/200", price: 5.99, hot: true },
    "NG96IFN1Z2FyY2FuZSBKdWljZQ==": { name: "Sugarcane Juice (4oz)", img: "https://via.placeholder.com/200", price: 8.99, hot: true },
};

exports.handler = async event => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Allows any origin to access the resources
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Adjust methods as needed
            'Access-Control-Allow-Headers': 'Content-Type', // Allows specific headers
        },
        body: JSON.stringify(products),
    }
}
