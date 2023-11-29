import calculator from './calculator.js';

// add
test('adds integers', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(72, 4)).toBe(76);
});

test('adds negative integers', () => {
  expect(calculator.add(-2, -3)).toBe(-5);
  expect(calculator.add(72, -4)).toBe(68);
});

test('adds floating-point numbers', () => {
  expect(calculator.add(2, 3.6)).toBeCloseTo(5.6);
  expect(calculator.add(-72.3, 4)).toBeCloseTo(-68.3);
});

// subtract
test('subtracts integers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(72, 4)).toBe(68);
});

test('subtracts negative integers', () => {
  expect(calculator.subtract(-2, -3)).toBe(1);
  expect(calculator.subtract(72, -4)).toBe(76);
});

test('subtracts floating-point numbers', () => {
  expect(calculator.subtract(2, 3.6)).toBeCloseTo(-1.6);
  expect(calculator.subtract(-72.3, 4)).toBeCloseTo(-76.3);
});

// multiply
test('multiplies integers', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.multiply(72, 4)).toBe(288);
});

test('multiplies negative integers', () => {
  expect(calculator.multiply(-2, -3)).toBe(6);
  expect(calculator.multiply(72, -4)).toBe(-288);
});

test('multiplies floating-point numbers', () => {
  expect(calculator.multiply(2, 3.6)).toBeCloseTo(7.2);
  expect(calculator.multiply(-72.3, 4)).toBeCloseTo(-289.2);
});

// divide
test('divides integers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(72, 4)).toBe(18);
});

test('divides negative integers', () => {
  expect(calculator.divide(-6, -2)).toBe(3);
  expect(calculator.divide(72, -4)).toBe(-18);
});

test('divides floating-point numbers', () => {
  expect(calculator.divide(2, 3.6)).toBeCloseTo(0.556);
  expect(calculator.divide(-72.3, 4)).toBeCloseTo(-18.075);
});
