let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails() {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
  },
};

console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log(member.fullDetails());

// My Name Is Elzero, My Age Is 38, I Live in Egypt
