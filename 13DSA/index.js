// Day 13: Strings - Advanced
// Palindrome, Anagram, Reverse, Frequency, Toggle Case

console.log("=== Day 13: Strings - Advanced ===\n");

// 1. Reverse a string
function reverseString(str) {
	let res = "";
	for (let i = str.length - 1; i >= 0; i--) res += str[i];
	return res;
}
console.log("1. Reverse String:");
console.log("   'hello' =>", reverseString("hello"));
console.log("   'JavaScript' =>", reverseString("JavaScript"));
console.log();

// 2. Palindrome string (case-insensitive, alphanumeric only optional)
function isPalindromeString(str) {
	const clean = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
	let l = 0, r = clean.length - 1;
	while (l < r) {
		if (clean[l] !== clean[r]) return false;
		l++; r--;
	}
	return true;
}
console.log("2. Palindrome String:");
console.log("   'Madam' =>", isPalindromeString("Madam"));
console.log("   'A man, a plan, a canal: Panama' =>", isPalindromeString("A man, a plan, a canal: Panama"));
console.log("   'hello' =>", isPalindromeString("hello"));
console.log();

// 3. Valid Anagram (ignore case & non-alphanumeric)
function isAnagram(a, b) {
	const normalize = s => s.replace(/[^a-z0-9]/gi, "").toLowerCase();
	a = normalize(a);
	b = normalize(b);
	if (a.length !== b.length) return false;
	const count = new Map();
	for (const ch of a) count.set(ch, (count.get(ch) || 0) + 1);
	for (const ch of b) {
		const v = count.get(ch);
		if (!v) return false;
		count.set(ch, v - 1);
	}
	return true;
}
console.log("3. Valid Anagram:");
console.log("   'anagram' vs 'nagaram' =>", isAnagram("anagram", "nagaram"));
console.log("   'Listen' vs 'Silent' =>", isAnagram("Listen", "Silent"));
console.log("   'rat' vs 'car' =>", isAnagram("rat", "car"));
console.log();

// 4. Character Frequency
function charFrequency(str) {
	const freq = new Map();
	for (const ch of str) {
		if (ch === " ") continue; // skip spaces
		freq.set(ch, (freq.get(ch) || 0) + 1);
	}
	return freq;
}
console.log("4. Character Frequency:");
const f = charFrequency("hello world");
console.log("   'hello world' =>", Object.fromEntries(f));
console.log();

// 5. Toggle Case (upper ↔ lower)
function toggleCase(str) {
	let out = "";
	for (const ch of str) {
		const isLetter = /[a-zA-Z]/.test(ch);
		if (!isLetter) { out += ch; continue; }
		const isUpper = ch >= "A" && ch <= "Z";
		out += isUpper ? ch.toLowerCase() : ch.toUpperCase();
	}
	return out;
}
console.log("5. Toggle Case:");
console.log("   'Hello World!' =>", toggleCase("Hello World!"));
console.log("   'jS r0cks' =>", toggleCase("jS r0cks"));
console.log();

module.exports = {
	reverseString,
	isPalindromeString,
	isAnagram,
	charFrequency,
	toggleCase,
};
