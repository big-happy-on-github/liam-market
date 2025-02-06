const products = {
    "math-hw": { name: "math hw", img: "https://pics.walgreens.com/prodimg/561575/100.jpg", price: "chips", hot: true},
    "english": { name: "english", img: "https://pics.walgreens.com/prodimg/561575/100.jpg", price: "idk", hot: false}
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    }
}
