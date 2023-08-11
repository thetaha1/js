let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;



// Method 1
console.log(myFriends.slice(false,-true)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(false,3)); // ["Ahmed", "Elham", "Osama"];