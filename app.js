function multiply(...num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] !== "number") continue;
    if (num[i] % 1 !== 0) num[i] = Math.floor(num[i]);
    result *= num[i];
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
