const fs = require('fs');
const helpers = require('../utils/helpers');

const getTotalRegion = (req, res) => {
  const { lotCode } = req.params;

  try {
    const dataPath = `./data/${lotCode}.json`;

    const data = fs.readFileSync(dataPath);
    const wine = JSON.parse(data);

    const result = {
      breakDownType: 'region',
      breakdown: [],
    };

    wine.components.forEach((component) => {
      const { percentage, region } = component;
      const newComponent = {
        percentage,
        key: region,
      };
      result.breakdown.push(newComponent);
    });

    result.breakdown.sort(helpers.compareByKey);

    const reducedArray = helpers.arrReducer(result.breakdown);

    result.breakdown = reducedArray;

    result.breakdown.sort(helpers.compareByPercentage);
    res.send(result);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

exports.getTotalRegion = getTotalRegion;
