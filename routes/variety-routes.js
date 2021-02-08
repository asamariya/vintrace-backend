const router = require('express').Router();

const varietyController = require('../controllers/variety-controller');

router.get('/:lotCode', varietyController.getTotalVariety);

module.exports = router;
