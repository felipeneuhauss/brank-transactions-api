const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hpp = require('hpp');
const cors = require('cors');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();

const STATIC_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZTllMDhkMy03OWMyLTRjYjMtOTZmMi0wMjNmZWE3ODcyY2UiLCJpc3MiOiJhd2Vzb21lLWJhbmsifQ.4J1IAK7lFM8FWpO_y3vC-cTWkEIs3DGrNysaJSaS-IE';

function authenticateUUID(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || authHeader !== STATIC_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

app.use(logger('dev'));
app.use(express.json());
app.use(hpp());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/api/v1/user', authenticateUUID, userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Exporta o app Express
module.exports = app;
