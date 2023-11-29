import analyzeArray from './analyze-array.js';

test('returns an object', () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(
    typeof obj === 'object' && !Array.isArray(obj) && obj !== null,
  ).toBeTruthy();
});

test('returned object has 4 properties', () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(Object.keys(obj).length).toBe(4);
})

test('calculates the average', () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.average).toBe(4);
});

test('finds the minimum number', () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.min).toBe(1);
});

test('finds the maximum number', () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.max).toBe(8);
});

test('calculates the length of the array', () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.length).toBe(6);
});
