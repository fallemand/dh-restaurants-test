/**
 * Transform list of restaurants and keep only desired fields
 * @param {Object} restaurant list data
 * @returns {Object} restaurant list data purged
 */
const transformRestaurantsList = data => (
  data.data.map(restaurant => ({
    id: restaurant.id,
    name: restaurant.general.name,
    logoUri: restaurant.general.logo_uri,
    rating: restaurant.rating.average,
    location: `${restaurant.address.street_name} ${restaurant.address.street_number} - ${restaurant.address.city}`,
    categories: restaurant.general.categories[0].split(',').sort(),
  }))
);

/**
 * Transform restaurant info and keep only desired fields
 * @param {Object} restaurant info data
 * @returns {Object} restaurant info data purged
 */
const transformRestaurant = data => ({
  name: data.info.name,
  rating: data.rating.average,
  location: `${data.address.streetName} ${data.address.streetNumber} - ${data.address.city}`,
  categories: data.info.categories.sort(),
  logoUri: data.info.logoUri,
  sections: data.sections,
});

module.exports = {
  transformRestaurantsList,
  transformRestaurant,
};
