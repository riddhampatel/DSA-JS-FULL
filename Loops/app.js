//  sum of natural numbers and factorial numbers

// var pr = prompt("Kaha Tak add Karwannoge ?");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       var sum = 0;
//       for (var i = 1; i <= n; i++) {
//         sum += i;
//       }
//       console.log(sum);
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }

//////////////////////////////////////////////////////////////
// factorial
// var pr = prompt("Kaha Tak ka factorial Karwannoge ?");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       var fact = 1;
//       for (var i = 1; i <= n; i++) {
//         fact *= i;
//       }
//       console.log(fact);
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }
//////////////////////////////////////////////////////////////////////
// factors number
var pr = prompt("Kaha Tak ka factorial Karwannoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      for (var i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          console.log(i);
        }
      }
      console.log(n);
    } else {
      console.log("Should be +ve and more than 0");
    }
  }
}
