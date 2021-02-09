const router = require('express').Router();

const searchController = require('../controllers/search-controller');

router.get('/wine', searchController.getWines);
router.get('/:lotCode', searchController.getWine);

module.exports = router;
