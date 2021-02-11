const fs = require('fs');
const helpers = require('../utils/helpers');

const getTotalVariety = (req, res) => {
  const { lotCode } = req.params;
  try {
    const dataPath = `./data/${lotCode}.json`;

    const data = fs.readFileSync(dataPath);
    const wine = JSON.parse(data);
    const result = {
      breakDownType: 'variety',
      breakdown: [],
    };

    wine.components.forEach((component) => {
      const { percentage, variety } = component;
      const newComponent = {
        percentage,
        key: variety,
      };
      result.breakdown.push(newComponent);
    });

    result.breakdown.sort(helpers.compareByKey);

    const reducedArray = helpers.arrReducer(result.breakdown);

    result.breakdown = reducedArray;

    result.breakdown.sort(helpers.compareByPercentage);
    res.send(result);
  } catch (err) {
    res.status(404).json({
      msg: 'No data found with that lotCode, please check and try again.',
    });
  }
};

exports.getTotalVariety = getTotalVariety;
