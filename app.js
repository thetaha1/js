let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) console.log("Done");
("{num1} Is The Same Value As {str}");

("{num1} Is The Same Value As {str} But Not The Same Type");
if (num1 === str) console.log("Done");

("{num1} Is Not The Same Value Or The Same Type As {str2}");
if (num1 != str) console.log("Done");

("{str} Is The Same Type As {str2} But Not The Same Value");
if (typeof str != typeof str && str != str2) console.log("Done");
