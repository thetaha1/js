let elLength = document.getElementsByTagName("img");

// console.log(elLength.length)

for (let i = 0; i < elLength.length; i++) {
  let curEl = elLength[i];
  curEl.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  curEl.setAttribute("alt", "Elzero Logo");
}

console.log(document.body);
