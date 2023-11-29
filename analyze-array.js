// input: array of numbers
// output: object with following properties: average, min, max, length
export default function analyzeArray(array) {
  const obj = {};

  obj.average = calcAvg(array);
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.length = array.length;

  return obj;
}

// returns the average of a given array of numbers
function calcAvg(array) {
  const sum = array.reduce((prev, curr) => prev + curr); // reduce to sum
  return sum / array.length; // return sum divided by length of array
}
