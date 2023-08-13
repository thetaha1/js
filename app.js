let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// No numbers , No words Start with letter 'A'
// Output
// "1 => Sayed"
// "2 => Mahmoud"

while (index < friends.length) {
  if (typeof friends[index] !== "number" && friends[index][0] !== "A")
    console.log(`${++counter} => ${friends[index]}`);
  index++;
}
