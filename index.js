const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

// Set default route: all routes will be handled in the SPA
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

// Set assets route
app.get('/build', express.static(path.join(__dirname, './build')));

// Start server
app.listen(config.port, config.host, () => {
  console.log(`App listening on: ${config.host}:${config.port}`);
});
