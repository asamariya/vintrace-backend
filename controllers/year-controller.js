const fs = require('fs');

const getTotalYear = (req, res) => {
  const { lotCode } = req.params;
  const dataPath = `./data/${lotCode}.json`;

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
};

exports.getTotalYear = getTotalYear;
