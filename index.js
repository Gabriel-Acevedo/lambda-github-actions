exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello Gabriel. We are testing the lambda functions.'),
    };
    return response;
};
