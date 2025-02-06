const products = {
    "math-hw": { name: "math hw", img: "https://pics.walgreens.com/prodimg/561575/100.jpg", price: "chips", description: "4.4 math hw, due 2/2", hot: true},
    "english": { name: "english", img: "https://pics.walgreens.com/prodimg/561575/100.jpg", price: "gummy candy", description: "idk"}
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    }
}
