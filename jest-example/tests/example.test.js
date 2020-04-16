

// * Function that compares two strings (regarding its whitespaces) no case sensitive.
// const { compareString } = require('../index');
// describe('CompareString test', () => {
//   test('Two equal strings', () => {
//     const result = compareString('hola', 'hola');
//     expect(result).toBe(true);
//   });

//   test('Two equal strings but with different whitespaces', () => {
//     const result = compareString('ho l a', 'h ola');
//     expect(result).toBe(true);
//   });

//   test('Two different strings', () => {
//     const result = compareString('hola', 'adios');
//     expect(result).toBe(false);
//   });
//   test('Two equal strings but with diferent uppercase and lowercase letters', () => {
//     const result = compareString('hola', 'HOLA');
//     expect(result).toBe(true);
//   });
// });

//* Function that sums the even values in an array and substract
//* the odd values, and returns its absolute value
const { evenOdd, absoluteValue, theFunction } = require('../index');
describe('sumEvenSubOdd test', () => {
  describe('Sum even and substract odd', () => {
    test('All even', () => {
      const result = evenOdd([2, 4, 8]);
      expect(result).toBe(14);
    });

    test('All odd', () => {
      const result = evenOdd([1, 3, 5]);
      expect(result).toBe(-7);
    });

    test('Even and Odd', () => {
      const result = evenOdd([1, 4, 3]);
      expect(result).toBe(2);
    });
  });

  describe('Absolute value', () => {
    test('Negative value', () => {
      const result = absoluteValue(-5);
      expect(result).toBe(5);
    });

    test('Positive value', () => {
      const result = absoluteValue(5);
      expect(result).toBe(5);
    });

    test('0 value', () => {
      const result = absoluteValue(0);
      expect(result).toBe(0);
    });
  });

  test('Its alive ', () => {
    const result = theFunction([-1, 2, 10, 200]);
    expect(result).toBeGreaterThan(0)
  });
});


//* Class Examples
// const { sum, sub, sumArray, subArray, calc } = require('../index');
// describe('sum test', () => {
//   test('Two positives values', () => {
//     const result = sum(2, 3);

//     expect(result).not.toBeUndefined();
//     expect(result).toBe(5);
//   });

//   test('Negative value', () => {
//     const result = sum(-3, 2);

//     expect(result).toBe(-1);
//   })
// });

// describe('sub test', () => {
//   test('Sub two positive values', () => {
//     const result = sub(15, 5);

//     expect(result).toBe(10);
//   });

//   test('Sub two negative values', () => {
//     const result = sub(-10, -5);

//     expect(result).toBe(-5);
//   });

//   test('Sub a negative value and a positive value', () => {
//     const result = sub(-10, 5);

//     expect(result).toBe(-15);
//   });
// });

// describe('Test of sumArray', () => {
//   test('sum array', () => {
//     const result = sumArray([1, 2, 3, 4]);

//     expect(result).toBe(10);
//   });

//   test('Strings', () => {
//     const result = sumArray(['Hola', ' ', 'Mundo']);

//     expect(result).toBeUndefined();
//   });
// });

// describe('Test of subArray', () => {
//   test('sub array', () => {
//     const result = subArray([1, 2, 3, 4]);

//     expect(result).toBe(-10);
//   });

//   test('Invalid values', () => {
//     const result = subArray([4, 'null', true]);

//     expect(result).toBeUndefined();
//   });
// });

// describe('Calc test', () => {
//   test('Calc sum', () => {
//     const result = calc('sum', [1, 2, 3, 4]);

//     expect(result).toBe(10);
//   });
//   test('Calc default', () => {
//     const result = calc('multiply', [1, 2, 3, 4]);

//     expect(result).toBe('Invalid operation');
//   });

// });
