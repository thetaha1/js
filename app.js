let start = 10;
let end = 100;
let exclude = 40;

for (let i = 10; i <= 100; i += 10) {
  if (i === 40) {
    continue;
  }
  console.log(i);
}
