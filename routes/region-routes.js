const router = require('express').Router();

const regionController = require('../controllers/region-controller');

router.get('/:lotCode', regionController.getTotalRegion);

module.exports = router;
