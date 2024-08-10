const fetch = require('node-fetch'); // Make sure to add 'node-fetch' to your package.json dependencies

let feedback = [];

exports.handler = async event => {
    if (event.httpMethod === "POST") {
        const feedbackData = JSON.parse(event.body);

        // Send feedback data to JSONPlaceholder (using the POST endpoint)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(feedbackData)
            });
            const jsonResponse = await response.json();
            
            // Optionally log or process the response from JSONPlaceholder
            console.log('Response from JSONPlaceholder:', jsonResponse);

            // Save feedback locally
            feedback.unshift(feedbackData);

            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Feedback received and sent to JSONPlaceholder.',
                    data: feedbackData,
                    jsonPlaceholderResponse: jsonResponse
                }),
            };
        } catch (error) {
            console.error('Error sending data to JSONPlaceholder:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Failed to send feedback to JSONPlaceholder.',
                    error: error.message
                }),
            };
        }
    }

    // Handle GET requests (if needed)
    if (event.httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify(feedback),
        };
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
};
