const fs = require('fs');
const path = require('path');
const restaurantsJson = require('./data/restaurants');
const { transformRestaurant, transformRestaurantsList } = require('./transform');

/**
 * In the restaurant json, there are several restaurants with same id and name.
 * We will keep only the first one from the list
 * @param {Array} restaurants
 * @returns {Array} unique restaurats
 */
const removeDuplicated = restaurants => (
  restaurants.filter((restaurant, index, self) => (
    index === self.findIndex(item => item.id === restaurant.id)
  ))
);

const getRestaurantsList = (req, res) => {
  res.status(200).json(removeDuplicated(transformRestaurantsList(restaurantsJson)));
};

const getRestaurant = (req, res) => {
  const { id } = req.params;
  const jsonPath = path.join(__dirname, `./data/restaurants/${id}.json`);
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).json({ message: 'Restaurant id not found ' });
      return;
    }
    res.set('Content-Type', 'application/json');
    res.status(200).send(transformRestaurant(JSON.parse(data)));
  });
};

module.exports = {
  getRestaurantsList,
  getRestaurant,
};
