let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((el) => isNaN(el) && el !== "Z")
  .map((el) => el[0])
  .reduce((acc, cur) => acc + cur, "")
  .toLowerCase()
  .split("_")
  .map(el => el[0].toUpperCase() + el.slice(1))
  .reduce((acc, cur) => acc + " " + cur);

console.log(solution); // Elzero Web School
