let chat = [];

exports.handler = async event => {
    if (event.httpMethod == "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify(chat),
        }
    } else {
        chat.unshift(JSON.parse(event.body));
        return {
            statusCode: 200,
            body: JSON.stringify(chat),
        }
    }
}
