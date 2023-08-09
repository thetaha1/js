// Add Variables Here
var numberOne = 10;
var numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);

console.log(`${numberTwo}
${numberOne}`);
