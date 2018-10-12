import { fetch } from 'whatwg-fetch';

/**
 * Get list of restaurants from the API
 * @returns {Array} restaurants list
 */
const restaurantsList = () => (
  fetch('/api/restaurants', {
    headers: { token: window.sessionStorage.getItem('token') },
  })
    .then(response => response.json())
    .then(data => data)
);

/**
 * Get restaurant info from the API
 * @param {number} restaurants id
 * @returns {Object} restaurants info
 */
const restaurantDetail = id => (
  fetch(`/api/restaurants/${id}`, {
    headers: { token: window.sessionStorage.getItem('token') },
  })
    .then(response => response.json())
    .then(data => data)
);

/**
 * Get rastaurant list with filter, sort, and page params.
 * @param {Object} params to filter and sort response - [optional]
 * @returns {Object} restaurants: list of restaurants, total: total restaurants
 */
const getRestaurants = ({ filter, value, sort, sortOrder, page, pageSize }) => {
  return restaurantsList().then((data) => {
    let restaurants = data;
    if (filter) {
      restaurants = restaurants.filter(
        restaurant => restaurant[filter].toLowerCase().includes(value.toLowerCase()),
      );
    }

    if (sort) {
      restaurants.sort((a, b) => {
        let result = a[sort].localeCompare(b[sort]);
        if (sortOrder) {
          result *= -1;
        }
        return result;
      });
    }

    let paginatedRestaurants = restaurants;
    if (page) {
      const startElement = (page - 1) * pageSize;
      const endElement = page * pageSize;
      paginatedRestaurants = paginatedRestaurants.slice(startElement, endElement);
    }

    return {
      restaurants: paginatedRestaurants,
      total: restaurants.length,
    };
  });
};

export default {
  getRestaurants,
  restaurantsList,
  restaurantDetail,
};
