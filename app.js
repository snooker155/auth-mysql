require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('middleware/error-handler');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
const usersRouter = require('./users/users');
app.use('/users', usersRouter);

// global error handler
app.use(errorHandler);

module.exports = app;
