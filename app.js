let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = letter.length - letter.length,j=letter.length; i < friends.length; i++) {
  if (friends[i] === "Ahmed" || friends[i] === "Ameer") continue;
  console.log(`${j} => ${friends[i]}`);
  j++
}
