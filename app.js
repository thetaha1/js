function showDetails(a, b, c) {
  let arr = [a, b, c];
  let newArr = ["string", "number", "boolean"];
  let availabllity = 0;
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] === "string" ? (newArr[0] = arr[i]) : null;
    typeof arr[i] === "number" ? (newArr[1] = arr[i]) : null;
    typeof arr[i] === "boolean" ? (newArr[2] = arr[i]) : null;
  }
  newArr[2] =
    newArr[2] === true
      ? (newArr[2] = "Available For Hire")
      : "Not Available For Hire";
  console.log(
    `Hello ${newArr[0]}, Your Age Is ${newArr[1]}, You Are ${newArr[2]}`
  );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
