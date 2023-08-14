function createSelectBox(startYear, endYear) {
  document.write(`<select name="cars" id="cars">`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="num${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
