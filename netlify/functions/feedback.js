const fs = require('fs');
const path = 'feedback.txt';

// Read existing feedback from the file
const readFeedback = () => {
    try {
        if (fs.existsSync(path)) {
            const data = fs.readFileSync(path, 'utf8');
            return JSON.parse(data);
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error reading feedback file:', error);
    }
};

// Write feedback to the file
const writeFeedback = (feedback) => {
    try {
        fs.writeFileSync(path, JSON.stringify(feedback, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing feedback file:', error);
    }
};

exports.handler = async event => {
    let feedback = readFeedback();

    if (event.httpMethod === "POST") {
        try {
            const newFeedback = JSON.parse(event.body);
            feedback.unshift(newFeedback);
            writeFeedback(feedback);
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid input' }),
            };
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(feedback),
    };
};
