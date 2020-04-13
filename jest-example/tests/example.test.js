const { suma, resta } = require('../index');

describe('Bateria de tests', () => {
  test('Test 1', () => {
    const a = true;

    expect(a).toBe(true);
  });

  test('Test 2', () => {
    const b = 'keepcoding';

    expect(b).toBe('keepcoding');
  });
});

describe('Test de la funcion suma', () => {
  test('Dos valores positivos', () => {
    const result = suma(2, 3);

    expect(result).not.toBeUndefined();
    expect(result).toBe(5);
  });

  test('Un valor negativo', () => {
    const result = suma(-3, 2);

    expect(result).toBe(-1);
  })
});

describe('Test de la funcion resta', () => {
  test('Restar dos valores positivos', () => {
    const result = resta(15, 5);

    expect(result).toBe(10);
  });

  test('Restar dos valores negativos', () => {
    const result = resta(-10, -5);

    expect(result).toBe(-5);
  });

  test('Restar un valor positivo otro negativo', () => {
    const result = resta(-10, 5);

    expect(result).toBe(-15);
  });
});
