const discounts = {
  "LIAMISTHEBESTMWUAHAHAHAHAHA": { percent: 0 }
};

exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(discounts),
    }
}
