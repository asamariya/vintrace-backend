const fs = require('fs');
const helpers = require('../utils/helpers');

const getTotalYear = (req, res) => {
  const { lotCode } = req.params;

  try {
    const dataPath = `./data/${lotCode}.json`;
    const data = fs.readFileSync(dataPath);

    const wine = JSON.parse(data);
    const result = {
      breakDownType: 'year',
      breakdown: [],
    };

    wine.components.forEach((component) => {
      const { percentage, year } = component;
      const newComponent = {
        percentage,
        key: year,
      };
      result.breakdown.push(newComponent);
    });

    result.breakdown.sort(helpers.compareByKey);

    const reducedArray = result.breakdown.reduce((acc, next) => {
      // acc stands for accumulator
      const lastItemIndex = acc.length - 1;
      const accHasContent = acc.length >= 1;

      if (accHasContent && acc[lastItemIndex].key === next.key) {
        acc[lastItemIndex].percentage += next.percentage;
      } else {
        // first time seeing this entry. add it!
        acc[lastItemIndex + 1] = next;
      }
      return acc;
    }, []);

    result.breakdown = reducedArray;

    result.breakdown.sort(helpers.compareByPercentage);
    res.send(result);
    // });
  } catch (err) {
    res.status(404).json({
      msg: 'No data found with that lotCode, please check and try again.',
    });
  }
};

exports.getTotalYear = getTotalYear;
