// This code to print numbers in Array 'arr' in new array.

let arr = ["PHP", 2, "JS", 2, 43, "Python", 3];
let newArr = [];

for (i = 0; i < arr.length + 1; i++) {
  if (typeof arr[i] == "number") {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
console.log(arr.length);
