/**
 * This API recreates the behavior of: https://mockapi.pizza.de/v1/
 * Because that API isn't working right now
 */
const { Router } = require('express');

const router = Router();
const authEndpoint = require('./auth');
const restaurantsEndpoint = require('./restaurants');

router.use('/auth', authEndpoint);
router.use('/restaurants', restaurantsEndpoint);

module.exports = router;
