let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let r = mix.map(function (el) {
  if (isNaN(el)) {
    return el
  }else{
    return "";
  };
}).reduce((acc,cur) => acc + cur);
console.log(r);

// Elzero
