const fs = require('fs');
const helpers = require('../utils/helpers');

const getTotalYear = (req, res) => {
  const { lotCode } = req.params;
  try {
    const result = helpers.getTotal(lotCode, 'year');
    res.send(result);
  } catch (err) {
    res.status(404).json({
      msg: 'No data found with that lotCode, please check and try again.',
      error: err.message,
    });
  }
};

exports.getTotalYear = getTotalYear;
