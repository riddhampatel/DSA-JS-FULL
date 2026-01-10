// Day 2: Conditional Statements - Practice Problems

console.log("=== Day 2 Practice Problems ===\n");

// Problem 1: Find Maximum of Three Numbers
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}
console.log("1. Max of Three:");
console.log("   max(10, 5, 8) =", maxOfThree(10, 5, 8));
console.log();

// Problem 2: Grade Calculator
function calculateGrade(marks) {
  if (marks >= 90) return 'A';
  else if (marks >= 80) return 'B';
  else if (marks >= 70) return 'C';
  else if (marks >= 60) return 'D';
  else return 'F';
}
console.log("2. Grade Calculator:");
console.log("   85 marks:", calculateGrade(85));
console.log("   55 marks:", calculateGrade(55));
console.log();

// Problem 3: Check Leap Year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("3. Leap Year:");
console.log("   2024:", isLeapYear(2024));
console.log("   2023:", isLeapYear(2023));
console.log();

// Problem 4: Day of Week (Switch Case)
function getDayName(dayNum) {
  switch(dayNum) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid day";
  }
}
console.log("4. Day of Week:");
console.log("   Day 1:", getDayName(1));
console.log("   Day 7:", getDayName(7));
console.log();

// Problem 5: Voting Eligibility (Ternary)
function canVote(age) {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}
console.log("5. Voting Eligibility:");
console.log("   Age 20:", canVote(20));
console.log("   Age 15:", canVote(15));
console.log();

console.log("✅ Day 2 Practice Complete!");
