const router = require('express').Router();

const yearVarietyController = require('../controllers/year-variety-controller');

router.get('/:lotCode', yearVarietyController.getTotalYearVariety);

module.exports = router;
