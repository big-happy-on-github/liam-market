const products = {
    "U3VnYXJjYW5lIFN0aWNrcyAoNCBwYWNrKQ==": { name: "Sugarcane Sticks (4 pack)", img: "https://via.placeholder.com/200", price: 5.99, hot: true, food: true },
    "NG96IFN1Z2FyY2FuZSBKdWljZQ==": { name: "Sugarcane Juice (4oz)", img: "https://via.placeholder.com/200", price: 8.99, hot: true , food: true },
    "test": { name: "TEST", img: "https://via.placeholder.com/200", price: 100.00 },
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    }
}
