const fs = require('fs');
const path = require('path');
const restaurantsJson = require('./data/restaurants');

const getRestaurantsList = (req, res) => {
  res.json(restaurantsJson);
};

const getRestaurant = (req, res) => {
  const { id } = req.params;
  const jsonPath = path.join(__dirname, `./data/restaurants/${id}.json`);
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).json({ message: 'Restaurant id not found '});
    }
    res.set('Content-Type', 'application/json');
    res.send(data);
  });
};

module.exports = {
  getRestaurantsList,
  getRestaurant,
};
