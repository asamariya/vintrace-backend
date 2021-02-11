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

exports.compareByKey = compareByKey;
exports.compareByPercentage = compareByPercentage;
