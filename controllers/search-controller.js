const fs = require('fs');

const getWines = (req, res) => {
  try {
    const { searchTerm } = req.query;
    const dir = fs.readdirSync('./data');

    const data = [];

    dir.forEach((fileName) => {
      data.push(require(`../data/${fileName}`));
    });

    const filteredData = data.filter(
      (x) =>
        x.lotCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (x.description || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.json(filteredData);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

const getWine = (req, res) => {
  const { lotCode } = req.params;

  const dataPath = `./data/${lotCode}.json`;
  try {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      const wine = JSON.parse(data);
      res.json(wine);
    });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.getWines = getWines;
exports.getWine = getWine;
