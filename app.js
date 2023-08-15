let specialMix = (...data) => {
  let result = 0;
  let calcIfMixType = 0;
  let check = () => {
    for (let i = 0; i < data.length; i++) {
      calcIfMixType = () => {
        if (isNaN(parseInt(data[i])) === false) result += parseInt(data[i]);
      };
      calcIfMixType();
    }
  };
  check();
  if (result === 0) {
    return "All Is Strings";
  }
  return result;
};

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
