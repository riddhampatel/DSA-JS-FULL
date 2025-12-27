// // // // Patterns

// // // for (let i = 1; i <= 5; i++) {
// // //     let row = "";
// // //     for (let j = 1; j <= i; j++) {
// // //         row += "*";
// // //     }
// // //     console.log(row);
// // // }


// // for (let i = 5; i >= 1; i--) {
// //     let row = "";
// //     for (let j = 1; j <= i; j++) {
// //         row += "*";
// //     }
// //     console.log(row);
// // }



// //pyramid 
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = " ".repeat(rows - i); // spaces
//     row += "*".repeat(2 * i - 1);   // stars
//     console.log(row);
// }


// number triangele
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

