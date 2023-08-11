// Array Challenge

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(zero, ++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

console.log(`${my[zero].slice(0 , 2)}${my[++zero].slice(2)}`); // "Elzero"

console.log(`${my[zero][++counter]}${my[zero][++counter].toUpperCase()}`); // "rO"
