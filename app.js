let myString = "EElllzzzzzzzeroo";

let uniqueLetters = myString
  .split('')
  .filter((char, index, arr) => arr.indexOf(char) === index)
  .reduce((cur, arr) => cur + arr);

console.log(uniqueLetters); // Output: Elzero