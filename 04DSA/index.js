// ===============================================
// DAY 4 – CONDITIONAL STATEMENTS (IF-ELSE)
// ===============================================

let age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
}



let marks = 72;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}



let username = "admin";
let password = 1234;

if (username === "admin") {
    if (password === 1234) {
        console.log("Login successful");
    } else {
        console.log("Wrong password");
    }
}


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


let age11 = 16;

let result = age11 >= 18 ? "Adult" : "Minor";
console.log(result);
