const authJson = require('./data/auth');

const getToken = (req, res) => {
  res.json(authJson);
};

module.exports = {
  getToken,
};
