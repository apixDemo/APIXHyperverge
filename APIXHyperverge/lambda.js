
let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    console.log(event);
    callback(null, event);
    // Swagger.http({
    //     url: 'https://services.apixplatform.com/api-sandbox/application/token',
    //     method: 'post',
    //     query: {},
    //     headers: { "Accept": "*/*", "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //         "userName": "modelbankuser@inboxbear.com",
    //         "password": "1qaz2wsx@"
    //     })
    // }).then((response) => {
    //     var access_token = "bearer " + response.body.access_token;
    //     console.log("Access token received");
    //     // Insert new API calls here to call with APIX Access Token
    //     Swagger.http({
    //         url: `https://api.apixplatform.com/facematch/1.0/v1/photo/verifyPair`,
    //         method: 'post',
    //         query: {},
    //         headers: { "appId": "2d9288", "appKey": "506505f70970ce16988f", "X-Authorization": access_token, "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded" },
    //         body: `image1=` + event.image1 + `&image2=` + event.image2 + `&type=id`
    //     }).then((response) => {
    //         response = {
    //             "isBase64Encoded": true,
    //             "statusCode": 200,
    //             "headers": {},
    //             "body": response
    //         }
    //         callback(null, response);
    //     }).catch((err) => {
    //         response = {
    //             "isBase64Encoded": true,
    //             "statusCode": err.statusCode,
    //             "headers": {},
    //             "body": err//.response.statusText
    //         }
    //         callback(null,response);
    //     });
    // }).catch((err) => {
    //     response = {
    //             "isBase64Encoded": true,
    //             "statusCode": err.statusCode,
    //             "headers": {},
    //             "body": err.response.statusText
    //         }
    //     callback(null,response);
    // });

}