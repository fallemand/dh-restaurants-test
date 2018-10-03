const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getRestaurantsList);
router.get('/:id', controller.getRestaurant);

module.exports = router;
