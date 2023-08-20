let myArray = ["E", "l", "z", ["e", "r"], "o"];

let concatenatedString = myArray
  .reduce((acc, current) => {
    if (Array.isArray(current)) {
      return acc.concat(current);
    } else {
      return acc.concat(current);
    }
  }, [])
  .reduce((acc, cur) => acc + cur);

console.log(concatenatedString); // Output: Elzero