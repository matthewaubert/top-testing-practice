import caesarCipher from './caesar-cipher.js';

test('shifts each character by input key', () => {
  expect(caesarCipher('string', 1)).toBe('tusjoh');
  expect(caesarCipher('string', 3)).toBe('vwulqj');
});

test('wraps from z to a', () => {
  expect(caesarCipher('zebra', 1)).toBe('afcsb');
});

test('maintains character case', () => {
  expect(caesarCipher('stRing', 3)).toBe('vwUlqj');
  expect(caesarCipher('Zebra', 1)).toBe('Afcsb');
});

test('handles punctuation', () => {
  expect(caesarCipher('Beware the Ides of March', 5)).toBe(
    'Gjbfwj ymj Nijx tk Rfwhm',
  );
  expect(caesarCipher("Let's carve him as a dish fit for the gods!", 3)).toBe(
    "Ohw'v fduyh klp dv d glvk ilw iru wkh jrgv!",
  );
});
