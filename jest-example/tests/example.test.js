const { suma, resta, sumaArray, restaArray, calculadora } = require('../index');

// describe('Bateria de tests', () => {
//   test('Test 1', () => {
//     const a = true;

//     expect(a).toBe(true);
//   });

//   test('Test 2', () => {
//     const b = 'keepcoding';

//     expect(b).toBe('keepcoding');
//   });
// });

const { compareString } = require('../index');

// * Funcion que compare dos strings (obviando los espacios) no case sensitive.
describe('CompareString test', () => {
  test('Dos strings exactamente iguales', () => {
    const result = compareString('hola', 'hola');
    expect(result).toBe(true);
  });

  test('Dos strings exactamente iguales pero con diferentes espacios', () => {
    const result = compareString('ho l a', 'h ola');
    expect(result).toBe(true);
  });

  test('Dos strings diferentes', () => {
    const result = compareString('hola', 'adios');
    expect(result).toBe(false);
  });
  test('Dos strings exactamente iguales pero con mayusculas y minusculas', () => {
    const result = compareString('hola', 'HOLA');
    expect(result).toBe(true);
  });
});

// describe('Test de la funcion suma', () => {
//   test('Dos valores positivos', () => {
//     const result = suma(2, 3);

//     expect(result).not.toBeUndefined();
//     expect(result).toBe(5);
//   });

//   test('Un valor negativo', () => {
//     const result = suma(-3, 2);

//     expect(result).toBe(-1);
//   })
// });

// describe('Test de la funcion resta', () => {
//   test('Restar dos valores positivos', () => {
//     const result = resta(15, 5);

//     expect(result).toBe(10);
//   });

//   test('Restar dos valores negativos', () => {
//     const result = resta(-10, -5);

//     expect(result).toBe(-5);
//   });

//   test('Restar un valor positivo otro negativo', () => {
//     const result = resta(-10, 5);

//     expect(result).toBe(-15);
//   });
// });

// describe('Test de sumaArray', () => {
//   test('Suma array', () => {
//     const result = sumaArray([1, 2, 3, 4]);

//     expect(result).toBe(10);
//   });

//   test('Cadenas', () => {
//     const result = sumaArray(['Hola', ' ', 'Mundo']);

//     expect(result).toBeUndefined();
//   });
// });

// describe('Test de restaArray', () => {
//   test('Resta array', () => {
//     const result = restaArray([1, 2, 3, 4]);

//     expect(result).toBe(-10);
//   });

//   test('Valores no permitidos', () => {
//     const result = restaArray([4, 'null', true]);

//     expect(result).toBeUndefined();
//   });
// });

// describe('Test de Calculadora', () => {
//   test('Calculadora suma', () => {
//     const result = calculadora('suma', [1, 2, 3, 4]);

//     expect(result).toBe(10);
//   });
//   test('Calculadora default', () => {
//     const result = calculadora('multiplicar', [1, 2, 3, 4]);

//     expect(result).toBe('Operacion Invalida');
//   });

// });
