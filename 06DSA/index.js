//sum of digits

function sumOfDigits(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(sumOfDigits(456)); // 15


//largest digit in a number

function largestDigit(n) {
  let max = 0;

  while (n > 0) {
    let digit = n % 10;
    if (digit > max) {
      max = digit;
    }
    n = Math.floor(n / 10);
  }

  return max;
}

console.log(largestDigit(59321)); // 9


//smallest digit in a number
function smallestDigit(n) {
    let min = 9;

    while (n > 0) {
        let digit = n % 10;
        if (digit < min) {
            min = digit;
        }
        n = Math.floor(n / 10);
    }

    return min;
}

console.log(smallestDigit(59321)); // 1


//frequency of a digit in a number
function digitFrequency(n) {
    let freq = Array(10).fill(0);

    while (n > 0) {
        let digit = n % 10;
        freq[digit]++;
        n = Math.floor(n / 10);
    }

    return freq;
}

console.log(digitFrequency(112233));

