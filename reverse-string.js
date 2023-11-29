// returns given string reversed
export default function reverseString(string) {
  let reversedString = ''; // empty reversedString

  // iterate over chars in string in reverse, add to reversedString
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.charAt(i);
  }

  return reversedString;
}
