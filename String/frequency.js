let s = prompt("Enter a string");
let arr = new Array(128).fill(0);
for (let i = 0; i < s.length; i++) {
  let indx = s.charCodeAt(i);
  arr[indx]++;
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i) + " appears " + arr[i] + " times");
  }
}
