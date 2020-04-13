const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const sumaArray = arr => arr.reduce((a, b) => suma(a, b), 0);

const restaArray = arr => arr.reduce((a, b) => resta(a, b), 0);

module.exports = {
  suma,
  resta,
  sumaArray,
  restaArray,
};
