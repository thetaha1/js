/* <div id="elzero" class="element" name="js">JavaScript</div> */

let elementByTagName = document.getElementsByTagName("div"); // 1
let elementByClassName = document.getElementsByClassName("element"); // 2
let elementById = document.getElementById("elzero"); // 3
let elementByName = document.getElementsByName("js"); // 4
let elByQuselTagName = document.querySelector("div");  // 5
let elByQuselId = document.querySelector("#elzero"); // 6
let elByQuselClassName = document.querySelector(".element"); // 7
let elByQuselName = document.querySelector("[name= 'js']"); // 8
let elByQuselAllTagName = document.querySelectorAll("div"); // 9
let elByQuselAllId = document.querySelectorAll("#elzero"); // 10
let elByQuselAllClassName = document.querySelectorAll(".element"); // 11
let elByQuselAllName = document.querySelectorAll("[name= 'js']"); // 12
let elByFirstElementChild = document.body.firstElementChild; // 13
let leByFirstChild = document.body.firstChild; // 14
let elByChildien = document.body.children[0]; // 15

console.log(elementByTagName);
console.log(elementByClassName);
console.log(elementById);
console.log(elementByName);
console.log(elByQuselTagName);
console.log(elByQuselId);
console.log(elByQuselClassName);
console.log(elByQuselName);
console.log(elByQuselAllTagName);
console.log(elByQuselAllId);
console.log(elByQuselAllClassName);
console.log(elByQuselAllName);
console.log(elByFirstElementChild);
console.log(leByFirstChild);
console.log(elByChildien);
