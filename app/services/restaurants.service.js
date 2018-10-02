import { fetch } from 'whatwg-fetch';

/**
 * Get list of restaurants from the API
 * @returns {Array} restaurants list
 */
const restaurantsList = () => (
  fetch('/api/restaurants', {
    headers: { token: window.localStorage.getItem('token') },
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
    headers: { token: window.localStorage.getItem('token') },
  })
    .then(response => response.json())
    .then(data => data)
);

export default {
  restaurantsList,
  restaurantDetail,
};
