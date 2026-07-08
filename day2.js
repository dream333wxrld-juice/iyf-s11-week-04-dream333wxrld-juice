// Approach 1: Using built-in methods
function reverseString1(str) {
    return str.split("").reverse().join("");
}

// Approach 2: Using a loop
function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test both
console.log(reverseString1("hello")); // olleh
console.log(reverseString2("hello")); // olleh