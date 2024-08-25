
# Bank Transactions API

**This API is designed for interview purposes.** It simulates user data and banking transactions, providing endpoints for retrieving user details and transaction histories. The API also includes error handling mechanisms for testing frontend robustness.

## Table of Contents

- [Introduction](#introduction)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [Get User Details](#get-user-details)
  - [Get Transactions](#get-transactions)
  - [Error Handling](#error-handling)
- [Running the API](#running-the-api)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Introduction

This API serves as a demonstration of RESTful web services in a Node.js/Express environment. It provides endpoints for retrieving randomized user data and simulating banking transactions. The primary purpose of this API is to be used in technical interviews.

## Authentication

To access the API, you must include a valid UUID in the `Authorization` header of your requests. The static UUID for this API is:

```
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZTllMDhkMy03OWMyLTRjYjMtOTZmMi0wMjNmZWE3ODcyY2UiLCJpc3MiOiJhd2Vzb21lLWJhbmsifQ.4J1IAK7lFM8FWpO_y3vC-cTWkEIs3DGrNysaJSaS-IE
```

If the correct UUID is not provided, the API will return a `401 Unauthorized` response.

## Endpoints

### Get User Details

- **Endpoint:** `GET /api/v1/user`
- **Description:** Retrieves a JSON object containing details of a randomly generated user.

**Response Example:**

```json
{
  "name": "John",
  "surname": "Doe",
  "age": 30,
  "created_at": "2023-01-01T00:00:00.000Z",
  "updated_at": "2023-08-25T12:34:56.789Z",
  "username": "johndoe123"
}
```

### Get Transactions

- **Endpoint:** `GET /api/v1/user/transactions`
- **Description:** Returns a list of transactions associated with the user. You can paginate through the results by providing a timestamp as the `page` parameter and limit the number of transactions returned using the `limit` parameter.

**Query Parameters:**

- `page` (integer): A timestamp indicating where to start listing transactions.
- `limit` (integer): The number of transactions to return. Default is 10.

**Example Request:**

```
GET /api/v1/user/transactions?page=1724582017551
```

**Response Example:**

```json
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
  }
]
```

### Error Handling

Approximately every 3rd or 4th request to the transactions endpoint may return a `500 Internal Server Error`. This is intentional and designed to help test how the frontend handles errors.

## Running the API

To run the API locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/bank-transactions-api.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd bank-transactions-api
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Access the API:**
   The API will be available at `http://localhost:3000`.

## Project Structure

```
/bank-transactions-api
│
├── /routes
│   ├── index.js        # Main route handler
│   └── user.js         # User and transactions route handler
│
├── /views              # View templates (Jade)
│
├── /public             # Static files (images, CSS, JS)
│
├── index.js            # Main application file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Dependencies

- **Express:** Web framework for Node.js
- **Faker:** Library for generating fake data
- **Morgan:** HTTP request logger middleware
- **Cookie-Parser:** Parse cookies attached to the client request object
- **Http-Errors:** Create HTTP errors for Express
- **Jade:** Templating engine for rendering HTML
- **HPP:** Express middleware to protect against HTTP Parameter Pollution
- **Uglify-JS:** JavaScript parser, mangler/compressor, beautifier toolkit

## Environment Variables

You can set the following environment variables to configure the API:

- `PORT`: The port number on which the API will run (default is `3000`).

## Deployment

To deploy the API on Vercel:

1. Ensure you have the Vercel CLI installed:
   ```bash
   npm install -g vercel
   ```

2. Run the deployment command:
   ```bash
   vercel
   ```

3. Follow the prompts to complete the deployment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
