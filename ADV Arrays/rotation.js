let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter k value"));
k = k % arr.length; // to avoid extra rotations

for (let j = 0; j < k; j++) {
  // store first element
  let copy = arr[0];

  // shift all elements to left
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // put first element at last
  arr[arr.length - 1] = copy;
}

console.log(arr);
