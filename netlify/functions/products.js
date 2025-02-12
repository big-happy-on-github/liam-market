const products = {
    "science-edpuzzle-2/10": { name: "science edpuzzle 2/10", img: "https://raw.githubusercontent.com/big-happy-on-github/liam-market/c91ca8ca578d8d46f4e93c8b253b7d02f7fb53da/answers/science%20edpuzzle%202.10/scienceedpuzzle2.10.png", price: "chips", description: "Mitosis vs. Meiosis Edpuzzle, due 2/11", hot: true},
    "algebra-keystone-day-2": { name: "algebra keystone day #2 2/6", img: "https://raw.githubusercontent.com/big-happy-on-github/liam-market/416db316c7c574e7acb0c473e680877ad780eceb/answers/algebrakeystoneday%232/algebrakeystoneday%232.png", price: "3 sticks of gum", description: "Algebra Keystone Day #2, due 2/13"},
    "activity-65-analysis-questions": { name: "science activity 65 analysis questions 2/12", img: "https://raw.githubusercontent.com/big-happy-on-github/liam-market/refs/heads/main/answers/activity65analysisquestions/activity65analysisquestions.png", price: "chocolate candy", description: "Science Activity 65 Analysis Questions, due 2/13", hot: true},
    "activity-63-stopping-to-think": { name: "science activity 63 stopping to think 2/10", img: "https://raw.githubusercontent.com/big-happy-on-github/liam-market/aa49590f2181e6619e8f4ed06d6727754603c409/answers/activity63stoppingtothink/activity63stoppingtothink.png", price: "gummy candy", description: "Science Activity 63 Stopping to Think, due 2/13"}
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    }
}
