const fs = require('fs');

const compareByKey = (a, b) => {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
};
const compareByPercentage = (a, b) => b.percentage - a.percentage;

const getTotalRegion = (req, res) => {
  const { lotCode } = req.params;

  const dataPath = `./data/${lotCode}.json`;

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

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

    result.breakdown.sort(compareByKey);

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

    result.breakdown.sort(compareByPercentage);
    res.send(result);
  });
};

exports.getTotalRegion = getTotalRegion;
