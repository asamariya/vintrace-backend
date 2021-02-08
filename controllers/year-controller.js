const fs = require('fs');

const compare = (a, b) => {
  const percentA = a.percentage;
  const percentB = b.percentage;

  let comparison = 0;
  if (percentA > percentB) {
    comparison = -1;
  } else if (percentA < percentB) {
    comparison = 1;
  }
  return comparison;
};

const getTotalYear = (req, res) => {
  const { lotCode } = req.params;
  const dataPath = `./data/${lotCode}.json`;

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

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
      result.breakdown.sort(compare);
    });

    res.send(result);
  });
};

exports.getTotalYear = getTotalYear;
