const router = require('express').Router();

const searchController = require('../controllers/search-controller');

router.get('/wine', searchController.getWine);

module.exports = router;
