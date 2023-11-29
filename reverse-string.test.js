import reverseString from './reverse-string.js';

test('reverses single-word string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('reverses multi-word string', () => {
  expect(reverseString('the quick brown fox')).toBe('xof nworb kciuq eht');
});
