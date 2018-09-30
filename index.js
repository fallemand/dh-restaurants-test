const express = require('express');
const path = require('path');
const config = require('./config');
const api = require('./api');

const app = express();

/**
 * Set base app endpoint. The rest of the urls will be handled in the client side.
 */
app.use('/', express.static(path.join(__dirname, './build')));

/**
 * Set API routes.
 * Recreate the behavior of: https://mockapi.pizza.de/v1/
 * Because currently it isn't working
 */
app.use('/api', api);

// Start server
app.listen(config.port, config.host, () => {
  console.log(`App listening on: ${config.host}:${config.port}`);
});
