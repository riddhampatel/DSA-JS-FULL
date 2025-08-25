let arr = [0, -1, 5, -3, 0, 2, -7, 8, 0, -2];

let i = 0, j = 0, k = arr.length - 1;

// Dutch National Flag variation
while (i <= k) {
  if (arr[i] < 0) {
    // If negative → swap with start
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j++;
  } else if (arr[i] === 0) {
    // If zero → just move forward
    i++;
  } else {
    // If positive → swap with end
    [arr[i], arr[k]] = [arr[k], arr[i]];
    k--;
  }
}

console.log(arr);
