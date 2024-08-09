const discounts = {
  "hi": { percent: 100 }
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(discounts),
    }
}
