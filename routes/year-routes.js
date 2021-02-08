const router = require('express').Router();

const yearController = require('../controllers/year-controller');

router.get('/:lotCode', yearController.getTotalYear);

module.exports = router;
