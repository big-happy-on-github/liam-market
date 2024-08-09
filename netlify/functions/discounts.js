const discounts = {
  "hi": 100,
  "wow": 20
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(discounts),
    }
}
