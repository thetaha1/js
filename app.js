// Loop Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

myAdmins.length = myAdmins.indexOf("Stop");
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr/>`);
let count = 1;

adminLoop: for (let i = 0; i < myAdmins.length; i++, count = 1) {
  document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
  document.write("<h1>Teem Members:</h1>");
  employeesLoop: for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0])
      document.write(`<p>- ${count++} ${myEmployees[j]}</p>`);
  }
  document.write(`<hr/>`);
}
