let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mix.map(function (el) {
  if (isNaN(el)) {
    return el;
  }
  else {
    el = ""
    return el;
  }
}).reduce(function (acc,current) {
  return acc + current;
})


console.log(word);
// Elzero