let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, -true)); // ["Ahmed", "Elham", "Osama"];

myFriends.pop();
console.log(myFriends);

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3
console.log(myFriends.splice(false, 3)); // ["Ahmed", "Elham", "Osama"];
