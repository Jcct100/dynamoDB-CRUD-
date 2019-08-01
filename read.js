var AWS = require("aws-sdk");
let awsConfig = {
  region: "eu-west-2",
  endpoint: "dynamodb.eu-west-2.amazonaws.com",
  accessKeyId: "accessKeyId",
  secretAccessKey: "+secretAccessKey"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function() {
  var params = {
    TableName: "users",
    Key: {
      email_id: "example@gmail.com"
    }
  };
  docClient.get(params, function(err, data) {
    if (err) {
      console.log(
        "users::fetchOneByKey::error - " + JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        "users::fetchOneByKey::success - " + JSON.stringify(data, null, 2)
      );
    }
  });
};

fetchOneByKey();
