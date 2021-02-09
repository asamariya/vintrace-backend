const fs = require('fs');

const getWine = (req, res) => {
  try {
    const { searchTerm } = req.query;
    const dir = fs.readdirSync('./data');

    const data = [];

    dir.forEach((fileName) => {
      data.push(require(`../data/${fileName}`));
    });

    const filteredData = data.filter(
      (x) =>
        x.lotCode.includes(searchTerm) ||
        (x.description || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.json(filteredData);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.getWine = getWine;
