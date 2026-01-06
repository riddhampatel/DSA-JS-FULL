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
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 8,
    name: "Palindrome number",
    sampleInput: 12321,
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 9,
    name: "Armstrong check (3-digit)",
    sampleInput: 371,
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 10,
    name: "Digit frequency of a number",
    sampleInput: [112233, 2],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 11,
    name: "Decimal to binary",
    sampleInput: 13,
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 12,
    name: "Binary to decimal",
    sampleInput: "1101",
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 13,
    name: "Recursive sum of array",
    sampleInput: [1, 2, 3, 4],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 14,
    name: "Power a^b (recursion)",
    sampleInput: [2, 10],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 15,
    name: "Remove duplicates (sorted array, in-place)",
    sampleInput: [1, 1, 2, 2, 3],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 16,
    name: "Second largest",
    sampleInput: [7, 1, 9, 4],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 17,
    name: "Move zeros to end",
    sampleInput: [0, 1, 0, 3, 12],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 18,
    name: "Rotate array by k",
    sampleInput: [[1, 2, 3, 4, 5, 6], 2],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 19,
    name: "Merge two sorted arrays",
    sampleInput: [
      [1, 3, 5],
      [2, 4, 6],
    ],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 20,
    name: "Dutch flag (0,1,2)",
    sampleInput: [2, 0, 2, 1, 1, 0],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 21,
    name: "Linear search",
    sampleInput: [[4, 7, 1], 7],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 22,
    name: "Bubble sort",
    sampleInput: [5, 1, 4, 2],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 23,
    name: "Map squares (evens only)",
    sampleInput: [1, 2, 3, 4],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 24,
    name: "Filter positives",
    sampleInput: [-2, 5, -1, 9],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 25,
    name: "Count occurrences with reduce",
    sampleInput: ["a", "b", "a", "c", "b", "a"],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 26,
    name: "Pair sum (two-pointer, sorted)",
    sampleInput: [[1, 2, 3, 4, 6], 6],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 27,
    name: "Max subarray sum (Kadane)",
    sampleInput: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 28,
    name: "String vowel count",
    sampleInput: "hello world",
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 29,
    name: "Toggle case",
    sampleInput: "AbCdE",
    solve: (input) => {
      /* TODO */
    },
  },
  {
    id: 30,
    name: "Anagram check",
    sampleInput: ["listen", "silent"],
    solve: (input) => {
      /* TODO */
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
