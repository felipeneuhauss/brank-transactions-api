var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bank Transactions API</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { color: #333; }
    h2 { color: #555; }
    pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
  </style>
</head>
<body>
  <h1>Bank Transactions API Documentation</h1>
  
  <p>Welcome to the Bank Transactions API! This API provides endpoints to interact with user data and simulate banking transactions. Below you'll find detailed information about the available endpoints, how to use them, and examples of expected responses.</p>
  
  <h2>Authentication</h2>
  <p>To access the API, include a valid UUID in the <code>Authorization</code> header of your requests. The static UUID for this API is:</p>
  <pre>Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZTllMDhkMy03OWMyLTRjYjMtOTZmMi0wMjNmZWE3ODcyY2UiLCJpc3MiOiJhd2Vzb21lLWJhbmsifQ.4J1IAK7lFM8FWpO_y3vC-cTWkEIs3DGrNysaJSaS-IE</pre>

  <h2>Endpoints</h2>
  
  <h3>1. Get User Details</h3>
  <p>Endpoint: <code>GET /api/v1/user</code></p>
  <p>This endpoint returns a JSON object containing details of a randomly generated user.</p>
  <pre>
Response Example:
{
  "name": "John",
  "surname": "Doe",
  "age": 30,
  "created_at": "2023-01-01T00:00:00.000Z",
  "updated_at": "2023-08-25T12:34:56.789Z",
  "username": "johndoe123"
}
  </pre>

  <h3>2. Get Transactions</h3>
  <p>Endpoint: <code>GET /api/v1/user/transactions</code></p>
  <p>This endpoint returns a list of transactions associated with the user. You can paginate through the results by providing a timestamp as the <code>page</code> parameter and limit the number of transactions returned using the <code>limit</code> parameter.</p>
  <p>Example request: <code>GET /api/v1/user/transactions?page=1724582017551</code></p>
  <p>Each transaction in the list includes details such as the type of expense, amount, location, and more.</p>
  <pre>
Query Parameters:
  - <strong>page</strong> (integer): A timestamp indicating where to start listing transactions.
  - <strong>limit</strong> (integer): The number of transactions to return. Default is 10.

Response Example:
[
  {
    "id": "ae693a7a-c71f-4968-9966-01d97e2bbdd5",
    "type": "others",
    "amount": 5473,
    "geo_location": {
      "latitude": "25.3087",
      "longitude": "73.5521"
    },
    "description": "Refined Soft Pizza",
    "establishment_name": "Will, Hauck and Windler",
    "city": "Swaniawskiburgh",
    "country": "Malaysia",
    "transaction_date": 1724582051742
  },
  {
    "id": "fa63a8f3-9793-4190-bed9-f2d8565ee887",
    "type": "health",
    "amount": 3524,
    "geo_location": {
      "latitude": "78.6825",
      "longitude": "-41.2210"
    },
    "description": "Unbranded Soft Chips",
    "establishment_name": "Waters Inc",
    "city": "Palmdale",
    "country": "Djibouti",
    "transaction_date": 1724582102769
  },
  ...
]
  </pre>

  <h3>3. Error Handling</h3>
  <p>Note that approximately every 3rd or 4th request to the transactions endpoint may return a 500 Internal Server Error. This is intentional and designed to help you test your frontend's ability to handle errors.</p>
  
  <p>Feel free to explore the API and don't hesitate to ask questions during the interview!</p>
</body>
</html>
  `);
});

module.exports = router;
