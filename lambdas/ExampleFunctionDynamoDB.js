const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const data = await documentClient.scan({TableName: "ExampleFunctionTable"}).promise();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };
    return response;
};
