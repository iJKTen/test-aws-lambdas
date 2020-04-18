exports.handler = async (event) => {
    
  const json = {
      "name": "AWS Lambda Function",
      "region": "N. Virginia"
  }
  
  const response = {
      statusCode: 200,
      body: JSON.stringify(json),
  };
  return response;
};
