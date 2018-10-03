import { fetch } from 'whatwg-fetch';

/**
 * Get token from the api
 * @returns {String} token
 */
const authService = () => (
  fetch('/api/auth')
    .then(response => response.json())
    .then(data => data.token)
);

export default authService;
