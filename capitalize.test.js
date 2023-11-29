import capitalize from './capitalize.js';

test('capitalizes first letter', () => {
  expect(capitalize('string')).toBe('String');
  expect(capitalize('the quick brown fox')).toBe('The quick brown fox');
});

test('leaves already capitalized strings unchanged', () => {
  expect(capitalize('Dave')).toBe('Dave');
});
