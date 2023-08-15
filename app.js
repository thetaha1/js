// Function Arrow Challenges

let names = (...na) => `String [${na.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

/* ================================= */

let calc = (one, two, ...nums) => -one - two + nums[0] + nums[1];

console.log(calc(10, 20, 50, 60)); // 80
