function sayHello(theName, theGender) {
  let nickآame = "";

  if (theGender === "Male") {
    nickآame = "Mr ";
  } else if (theGender === "Female") {
    nickآame = "Miss ";
  }
  console.log(`Hello ${nickآame}${theName}`);
}

// Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
