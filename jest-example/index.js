const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const sumArray = arr => {
  let flag = false;
  arr.forEach(value => {
    if (typeof value !== 'number') {
      flag = true;
    }
  });

  if (flag) {
    return;
  }

  const result = arr.reduce((a, b) => sum(a, b), 0);

  return result;
};

const subArray = arr => {
  let flag = false;
  arr.forEach(value => {
    if (typeof value !== 'number') {
      flag = true;
    }
  });

  if (flag) {
    return;
  }

  const result = arr.reduce((a, b) => sub(a, b), 0);

  return result;
};

const calc = (operation, arr) => {
  switch (operation) {
    case 'sum':
      return sumArray(arr);
      break;
    case 'sub':
      return subArray(arr);
      break;

    default:
      return 'Invalid operation';
      break;
  }
}
const compareString = (val1, val2) => {
  if (val1.replace(/ /g, '').toUpperCase() === val2.replace(/ /g, '').toUpperCase()) return true;
  return false;
};

const evenOdd = (arr) => arr.reduce((prevValue, value) => {
  if (value % 2) {
    return prevValue - value;
  } else {
    return prevValue + value;
  }
});

const absoluteValue = (val) => {
  if (val < 0) return val * -1;
  return val;
}

const theFunction = (arr) => absoluteValue(evenOdd(arr));


module.exports = {
  sum,
  sub,
  sumArray,
  subArray,
  calc,
  compareString,
  evenOdd,
  absoluteValue,
  theFunction
};
