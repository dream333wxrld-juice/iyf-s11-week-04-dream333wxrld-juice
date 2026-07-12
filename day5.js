// Day 5: Palindrome Checker

// Approach 1: Simple method
function isPalindrome1(str) {
    // Remove spaces and convert to lowercase
    let cleaned = str.toLowerCase().replace(/\s/g, "");
    // Compare with reversed version
    return cleaned === cleaned.split("").reverse().join("");
}

// Approach 2: Using loop
function isPalindrome2(str) {
    let cleaned = str.toLowerCase().replace(/\s/g, "");
    for (let i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test
console.log(isPalindrome1("racecar"));                              // true
console.log(isPalindrome1("hello"));                                // false
console.log(isPalindrome1("A man a plan a canal Panama"));          // true
console.log(isPalindrome2("racecar"));                              // true
console.log(isPalindrome2("hello"));                                // false
console.log(isPalindrome2("A man a plan a canal Panama"));          // true