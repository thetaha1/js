function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`${(theAge *= 12)} Months`);
    console.log(`${(theAge *= 4)} Week`);
    console.log(`${(theAge *= 7)} Day`);
    console.log(`${(theAge *= 24)} Hour`);
    console.log(`${(theAge *= 60)} Minutes`);
    console.log(`${(theAge *= 60)} Seconds`);
  }
}

// Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
