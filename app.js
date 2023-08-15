function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    let newName = zName.split(" ");
    return `Hello ${newName[0]} ${newName[1][0]}.`;
  }
  function ageWithMessage() {
    let currentAge = zAge.split(" ");
    return `Your Age Is ${currentAge[0]}`;
  }
  function countryTwoLetters() {
    let markOfCountry = zCountry.split("");
    return `You Live In ${markOfCountry[0].toUpperCase()}${markOfCountry[1].toUpperCase()}`;
  }
  function fullDetails() {
    return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
