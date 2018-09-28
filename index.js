const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

// Set base folder
app.use('/', express.static(path.join(__dirname, './build')));

// Start server
app.listen(config.port, config.host, () => {
  console.log(`App listening on: ${config.host}:${config.port}`);
});
