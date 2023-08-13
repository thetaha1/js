let start = 0;
let swappedName = "elZerO";

for (let i = start; i < swappedName.length; ++i) {
  if (i === 0) swappedName = swappedName.split("");
  if (swappedName[i].toUpperCase() === swappedName[i]) {
    swappedName[i] = swappedName[i].toLowerCase();
  } else {
    swappedName[i] = swappedName[i].toUpperCase();
  }
  if (i === swappedName.length - 1) console.log(swappedName.join(""));
}