const products = {
    "Lint-Lindor-Milk-Chocolate-Truffles-2-pack": { name: "Milk Chocolate (2 pack)", img: "https://pics.walgreens.com/prodimg/561575/100.jpg", price: 0.99, hot: true, food: true },
    "NG96IFN1Z2FyY2FuZSBKdWljZQ==": { name: "Sugarcane Juice (4oz)", img: "https://via.placeholder.com/200", price: 8.99, hot: true , food: true },
    "test": { name: "TEST", img: "https://via.placeholder.com/200", price: 100.00, weight: 100, length: 1, width: 2, height: 3 },
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    }
}
