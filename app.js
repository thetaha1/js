function taha(name, car) {
  function abady() {
    return `Your friend Abady car is ${car} Mr ${name}`;
  }
  function ret() {
    return abady();
  }
  return ret();
}
console.log(taha("Taha", "Fourd"));
