const products = {
    "science-edpuzzle-2/10": { name: "science edpuzzle 2/10", img: "/answers/science edpuzzle 2.10/scienceedpuzzle2.10.png", price: "chips", description: "Mitosis vs. Meiosis Edpuzzle, due 2/11", hot: true},
    "english": { name: "english", img: "https://pics.walgreens.com/prodimg/561575/100.jpg", price: "gummy candy", description: "idk"}
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    }
}
