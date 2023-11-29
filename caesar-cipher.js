// encodes a string by a shift factor
// (case sensitive and does not affect punctuation)
// input: string, 'key' integer
// output: string with each character shifted in the alphabet by the key
// e.g. caesarCipher('You, beware!', 3) == 'Brx, ehzduh!'
export default function caesarCipher(string, key) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const punctuation = ",.:;?!' ";
  let cipherString = '';

  // for each char in string
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    // if char is punctuation, add to cipherString without modification
    if (punctuation.includes(char)) cipherString += char;
    else {
      // find cipher char index
      const cipherIndex = (alpha.indexOf(char.toLowerCase()) + key) % 26;
      // test if char is lower
      const charIsLowerCase = char === char.toLowerCase();
      // add cipher char to cipherString
      cipherString += charIsLowerCase
        ? alpha[cipherIndex]
        : alpha[cipherIndex].toUpperCase();
    }
  }

  return cipherString;
}
