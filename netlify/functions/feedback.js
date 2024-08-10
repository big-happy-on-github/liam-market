let feedback = [];

exports.handler = async event => {
    if (event.httpMethod == "POST") {
      feedback.unshift(JSON.parse(event.body));
    }
  
    return {
        statusCode: 200,
        body: JSON.stringify(feedback),
    }
}
