const products = {
    "science-edpuzzle-2/10": { name: "science edpuzzle 2/10", img: "https://raw.githubusercontent.com/big-happy-on-github/liam-market/c91ca8ca578d8d46f4e93c8b253b7d02f7fb53da/answers/science%20edpuzzle%202.10/scienceedpuzzle2.10.png", price: "chips", description: "Mitosis vs. Meiosis Edpuzzle, due 2/11", hot: true},
    /*"english": { name: "english", img: "https://pics.walgreens.com/prodimg/561575/100.jpg", price: "gummy candy", description: "idk"}*/
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    }
}
