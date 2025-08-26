let s = prompt("Enter a string");
console.log(s);

let toggle = "";
for (let i = 0; i < s.length - 1; i++) {
  let ch = s.charCodeAt(i);

  if (ch >= 65 && ch <= 90) {
    toggle = toggle + String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle = toggle + String.fromCharCode(ch - 32);
  }
}
console.log(toggle);
