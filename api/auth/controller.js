const authJson = require('./data/auth');

const getToken = (req, res) => {
  res.status(200).json(authJson);
};

module.exports = {
  getToken,
};
