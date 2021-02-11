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

const arrReducer = (arr) => {
  const reducedArray = arr.reduce((acc, next) => {
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
  return reducedArray;
};

const getTotal = (lotCode, type) => {
  const dataPath = `./data/${lotCode}.json`;

  const data = fs.readFileSync(dataPath);

  const wine = JSON.parse(data);

  const result = {
    breakDownType: type,
    breakdown: [],
  };

  wine.components.forEach((component) => {
    const { percentage } = component;

    const key = component[type];

    const newComponent = {
      percentage,
      key,
    };
    result.breakdown.push(newComponent);
  });

  result.breakdown.sort(compareByKey);

  const reducedArray = arrReducer(result.breakdown);

  result.breakdown = reducedArray;

  result.breakdown.sort(compareByPercentage);

  return result;
};

exports.compareByKey = compareByKey;
exports.compareByPercentage = compareByPercentage;
exports.arrReducer = arrReducer;
exports.getTotal = getTotal;
