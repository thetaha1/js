let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let letterWithoutNumbers = mix
  .map((el) => (isNaN(el) ? el : ""))
  .reduce((acc, cur) => acc + cur);

console.log(letterWithoutNumbers); // Elzero