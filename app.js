function calculate(firstNum, secondNum, operation) {
  if (typeof firstNum === "undefined") {
    console.log("NO NUMBERS");
    return 0;
  } else if (typeof secondNum === "undefined") {
    console.log("Second Number Not Found");
    return 0;
  }

  if (operation === "add" || "undefined") {
    console.log(`Addetion : ${firstNum + secondNum}`);
  } else if (operation === "subtract") {
    console.log(`Subtract : ${firstNum - secondNum}`);
  } else if (operation === "multiply") {
    console.log(`Multiply : ${firstNum * secondNum}`);
  }
}

// Output
calculate(); // NO NUMBERS
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
