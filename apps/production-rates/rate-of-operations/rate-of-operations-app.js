const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const routes = require('./entry-point/routes');

const rate_of_operations_app = express();

rate_of_operations_app.use(bodyParser.urlencoded({ extended: true }))
rate_of_operations_app.use(bodyParser.json())
rate_of_operations_app.use(cors({
    origin: ['http://localhost:8080']
}));

rate_of_operations_app.use('/rate-of-operations', routes)

//this middleware must be in the last

module.exports = rate_of_operations_app;
