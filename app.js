let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().join("").substring(arr2.length).toLowerCase();

console.log(allArrs); // fxy
