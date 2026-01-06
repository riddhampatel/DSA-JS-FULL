// Day 11 scaffold: 30 mixed-problem stubs + tiny runner
// Usage: node index.js <problemId> <inputAsJsonOrString>
// If no input is passed, runner will try to use the problem's sampleInput when available.

const problems = [
  {
    id: 1,
    name: "Grade bucket",
    sampleInput: 87,
    solve: (marks) => {
      if (marks >= 90) return "A";
      if (marks >= 75) return "B";
      if (marks >= 50) return "C";
      return "Fail";
    },
  },
  {
    id: 2,
    name: "Leap year",
    sampleInput: 2024,
    solve: (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    },
  },
  {
    id: 3,
    name: "Quadrant finder",
    sampleInput: [3, -4],
    solve: ([x, y]) => {
      if (x > 0 && y > 0) return "Q1";
      if (x < 0 && y > 0) return "Q2";
      if (x < 0 && y < 0) return "Q3";
      if (x > 0 && y < 0) return "Q4";
      return "Axis";
    },
  },

  {
    id: 4,
    name: "Factorial",
    sampleInput: 5,
    solve: (n) => {
      let fact = 1;
      for (let i = 1; i <= n; i++) fact *= i;
      return fact;
    },
  },
  {
    id: 5,
    name: "Sum of evens up to N",
    sampleInput: 10,
    solve: (n) => {
      let sum = 0;
      for (let i = 2; i <= n; i += 2) sum += i;
      return sum;
    },
  },
  {
    id: 6,
    name: "Hollow rectangle pattern",
    sampleInput: [4, 6],
    solve: ([rows, cols]) => {
      let res = "";
      for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
          if (i === 1 || i === rows || j === 1 || j === cols) res += "*";
          else res += " ";
        }
        res += "\n";
      }
      return res;
    },
  },
  {
    id: 7,
    name: "Reverse integer",
    sampleInput: 12340,
    solve: (num) => {
      let rev = 0;
      while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
      }
      return rev;
    },
  },
  {
    id: 8,
    name: "Palindrome number",
    sampleInput: 12321,
    solve: (num) => {
      let temp = num,
        rev = 0;
      while (temp > 0) {
        rev = rev * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
      }
      return rev === num;
    },
  },
  {
    id: 9,
    name: "Armstrong check (3-digit)",
    sampleInput: 371,
    solve: (num) => {
      let temp = num,
        sum = 0;
      while (temp > 0) {
        let d = temp % 10;
        sum += d ** 3;
        temp = Math.floor(temp / 10);
      }
      return sum === num;
    },
  },
  {
    id: 10,
    name: "Digit frequency of a number",
    sampleInput: [112233, 2],
    solve: ([num, digit]) => {
      let count = 0;
      while (num > 0) {
        if (num % 10 === digit) count++;
        num = Math.floor(num / 10);
      }
      return count;
    },
  },
  {
    id: 11,
    name: "Decimal to binary",
    sampleInput: 13,
    solve: (n) => {
      return n.toString(2);
    },
  },
  {
    id: 12,
    name: "Binary to decimal",
    sampleInput: "1101",
    solve: (bin) => {
      return parseInt(bin, 2);
    },
  },
  {
    id: 13,
    name: "Recursive sum of array",
    sampleInput: [1, 2, 3, 4],
    solve: (arr) => {
      const recSum = (idx = 0) => {
        if (idx === arr.length) return 0;
        return arr[idx] + recSum(idx + 1);
      };
      return recSum();
    },
  },
  {
    id: 14,
    name: "Power a^b (recursion)",
    sampleInput: [2, 10],
    solve: ([a, b]) => {
      const power = (b) => {
        if (b === 0) return 1;
        return a * power(b - 1);
      };
      return power(b);
    },
  },
  {
    id: 15,
    name: "Remove duplicates (sorted array, in-place)",
    sampleInput: [1, 1, 2, 2, 3],
    solve: (arr) => {
      let i = 0;
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
        }
      }
      return i + 1;
    },
  },
  {
    id: 16,
    name: "Second largest",
    sampleInput: [7, 1, 9, 4],
    solve: (arr) => {
      let max = -Infinity,
        second = -Infinity;
      for (let n of arr) {
        if (n > max) {
          second = max;
          max = n;
        } else if (n > second && n !== max) {
          second = n;
        }
      }
      return second;
    },
  },
  {
    id: 17,
    name: "Move zeros to end",
    sampleInput: [0, 1, 0, 3, 12],
    solve: (arr) => {
      let idx = 0;
      for (let n of arr) if (n !== 0) arr[idx++] = n;
      while (idx < arr.length) arr[idx++] = 0;
      return arr;
    },
  },
  {
    id: 18,
    name: "Rotate array by k",
    sampleInput: [[1, 2, 3, 4, 5, 6], 2],
    solve: ([[...arr], k]) => {
      k %= arr.length;
      return arr.slice(-k).concat(arr.slice(0, -k));
    },
  },
  {
    id: 19,
    name: "Merge two sorted arrays",
    sampleInput: [
      [1, 3, 5],
      [2, 4, 6],
    ],
    solve: ([a, b]) => {
      let i = 0,
        j = 0,
        res = [];
      while (i < a.length && j < b.length) {
        res.push(a[i] < b[j] ? a[i++] : b[j++]);
      }
      return res.concat(a.slice(i)).concat(b.slice(j));
    },
  },
  {
    id: 20,
    name: "Dutch flag (0,1,2)",
    sampleInput: [2, 0, 2, 1, 1, 0],
    solve: (arr) => {
      let low = 0,
        mid = 0,
        high = arr.length - 1;
      while (mid <= high) {
        if (arr[mid] === 0) [arr[low++], arr[mid++]] = [arr[mid], arr[low]];
        else if (arr[mid] === 1) mid++;
        else [arr[mid], arr[high--]] = [arr[high], arr[mid]];
      }
      return arr;
    },
  },
  {
    id: 21,
    name: "Linear search",
    sampleInput: [[4, 7, 1], 7],
    solve: ([arr, target]) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
      }
      return -1;
    },
  },
  {
    id: 22,
    name: "Bubble sort",
    sampleInput: [5, 1, 4, 2],
    solve: (arr) => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    },
  },
  {
    id: 23,
    name: "Map squares (evens only)",
    sampleInput: [1, 2, 3, 4],
    solve: (arr) => {
      return arr.filter((n) => n % 2 === 0).map((n) => n * n);
    },
  },
  {
    id: 24,
    name: "Filter positives",
    sampleInput: [-2, 5, -1, 9],
    solve: (arr) => {
      return arr.filter((n) => n > 0);
    },
  },
  {
    id: 25,
    name: "Count occurrences with reduce",
    sampleInput: ["a", "b", "a", "c", "b", "a"],
    solve: (arr) => {
      return arr.reduce((acc, c) => {
        acc[c] = (acc[c] || 0) + 1;
        return acc;
      }, {});
    },
  },
  {
    id: 26,
    name: "Pair sum (two-pointer, sorted)",
    sampleInput: [[1, 2, 3, 4, 6], 6],
    solve: ([arr, target]) => {
      let l = 0,
        r = arr.length - 1;
      while (l < r) {
        let sum = arr[l] + arr[r];
        if (sum === target) return [arr[l], arr[r]];
        sum < target ? l++ : r--;
      }
      return [];
    },
  },
  {
    id: 27,
    name: "Max subarray sum (Kadane)",
    sampleInput: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    solve: (arr) => {
      let maxSum = arr[0],
        curr = arr[0];
      for (let i = 1; i < arr.length; i++) {
        curr = Math.max(arr[i], curr + arr[i]);
        maxSum = Math.max(maxSum, curr);
      }
      return maxSum;
    },
  },
  {
    id: 28,
    name: "String vowel count",
    sampleInput: "hello world",
    solve: (str) => {
      let count = 0;
      for (let ch of str.toLowerCase()) {
        if ("aeiou".includes(ch)) count++;
      }
      return count;
    },
  },
  {
    id: 29,
    name: "Toggle case",
    sampleInput: "AbCdE",
    solve: (str) => {
      return str
        .split("")
        .map((ch) =>
          ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
        )
        .join("");
    },
  },
  {
    id: 30,
    name: "Anagram check",
    sampleInput: ["listen", "silent"],
    solve: ([a, b]) => {
      return a.split("").sort().join("") === b.split("").sort().join("");
    },
  },
];

function parseInput(raw) {
  if (raw === undefined) return undefined;
  try {
    return JSON.parse(raw);
  } catch (err) {
    return raw;
  }
}

function runFromCli() {
  const idArg = Number(process.argv[2]);
  const problemId = Number.isFinite(idArg) ? idArg : problems[0].id;
  const problem = problems.find((p) => p.id === problemId);

  if (!problem) {
    console.error(`Unknown problem id: ${problemId}`);
    process.exit(1);
  }

  const rawInput = process.argv[3];
  const input =
    rawInput !== undefined ? parseInput(rawInput) : problem.sampleInput;

  if (input === undefined) {
    console.error("No input provided and no sampleInput set for this problem.");
    process.exit(1);
  }

  const output = problem.solve(input);
  if (output === undefined) {
    console.error(
      `solve() for problem ${problem.id} - ${problem.name} is not implemented yet.`
    );
    process.exit(1);
  }
  console.log(output);
}

if (require.main === module) {
  runFromCli();
}

module.exports = { problems, parseInput };
