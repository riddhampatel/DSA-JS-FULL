// let unit = Number(prompt("Enter electricity unit")); //700
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13; // 3900
//   unit = 400;
// } // 400
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8; //1600
//   unit = 200;
// } // 200
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6; //600
//   unit = 100;
// }
// amount += unit * 4;

// console.log(amount);






///  inr denomition 

let amount = 5234;

if (amount >= 500) {
    console.log("500 notes : " + Math.floor(amount / 500));
    amount = amount % 500;
}

if (amount >= 200) {
    console.log("200 notes : " + Math.floor(amount / 200));
    amount = amount % 200;
}

if (amount >= 100) {
    console.log("100 notes : " + Math.floor(amount / 100));
    amount = amount % 100;
}

if (amount >= 50) {
    console.log("50 notes : " + Math.floor(amount / 50));
    amount = amount % 50;
}

if (amount >= 20) {
    console.log("20 notes : " + Math.floor(amount / 20));
    amount = amount % 20;
}

if (amount >= 10) {
    console.log("10 notes : " + Math.floor(amount / 10));
    amount = amount % 10;
}

if (amount >= 5) {
    console.log("5 notes : " + Math.floor(amount / 5));
    amount = amount % 5;
}

if (amount >= 2) {
    console.log("2 notes : " + Math.floor(amount / 2));
    amount = amount % 2;
}

if (amount === 1) {
    console.log("1 notes : " + amount);
}
