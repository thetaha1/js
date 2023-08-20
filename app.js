let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let absNums = numsAndStrings.filter((el) => !isNaN(el)).map((el) => -el);

console.log(absNums)

// [-1, -10, 10, 20, -5, -3]