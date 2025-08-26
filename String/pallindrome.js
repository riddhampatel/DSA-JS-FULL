let s = prompt("Enter a String");
let isPalindrome = true;

let i = 0,
  j = s.length - 1;

while (i < j) {
  if (s.charAt(i) !== s.charAt(j)) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
