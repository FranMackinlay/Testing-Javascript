const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const sumaArray = arr => {
  let flag = false;
  arr.forEach(value => {
    if (typeof value !== 'number') {
      flag = true;
    }
  });

  if (flag) {
    return;
  }

  const result = arr.reduce((a, b) => suma(a, b), 0);

  return result;
};

const restaArray = arr => {
  let flag = false;
  arr.forEach(value => {
    if (typeof value !== 'number') {
      flag = true;
    }
  });

  if (flag) {
    return;
  }

  const result = arr.reduce((a, b) => resta(a, b), 0);

  return result;
};

const calculadora = (operation, arr) => {
  switch (operation) {
    case 'suma':
      return sumaArray(arr);
      break;
    case 'resta':
      return restaArray(arr);
      break;

    default:
      return 'Operacion Invalida';
      break;
  }
}

module.exports = {
  suma,
  resta,
  sumaArray,
  restaArray,
  calculadora,
};