var express = require('express');
var router = express.Router();
var faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    age: faker.random.number({ min: 18, max: 80 }),
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
    username: faker.internet.userName()
  };

  res.json(user);
});

const expenseTypes = ['groceries', 'health', 'entertainment', 'travel', 'utilities', 'others'];

function generateTransaction(timestamp) {
  return {
    id: faker.datatype.uuid(),
    type: expenseTypes[Math.floor(Math.random() * expenseTypes.length)],
    amount: faker.datatype.number({ min: 1, max: 10000 }), // Amount como inteiro
    geo_location: {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude()
    },
    description: faker.commerce.productName(),
    establishment_name: faker.company.companyName(),
    city: faker.address.city(),
    country: faker.address.country(),
    transaction_date: timestamp,
  };
}

/* GET transactions listing. */
router.get('/transactions', function(req, res, next) {
  const limit = parseInt(req.query.limit) || 10;
  const pageTimestamp = parseInt(req.query.page) || Date.now();

  if (Math.random() < 0.25) {
    return res.status(500).send('Internal Server Error');
  }

  const transactions = [];
  let currentTimestamp = pageTimestamp;

  for (let i = 0; i < limit; i++) {
    currentTimestamp += faker.datatype.number({ min: 1000, max: 100000 });
    transactions.push(generateTransaction(currentTimestamp));
  }

  transactions.sort((a, b) => a.transaction_date - b.transaction_date);

  res.json(transactions);
});

module.exports = router;
