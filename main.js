// Variable declarations
let name = "Gilbert Mungai";
let age = 18;
const birthYear = 2007;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;

const PI = 3.14159;

// Variable Practice
let isStudent = true;
let favoriteColors = ["black", "orange", "white"];
let today = new Date();

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", today);
// Exercise 1: Number Operations
// Basic math
let a = 10;
let b = 3;

console.log(a + b);    // Addition
console.log(a - b);    // Subtraction
console.log(a * b);    // Multiplication
console.log(a / b);    // Division
console.log(a % b);    // Modulus (remainder)
console.log(a ** b);   // Exponentiation

// Increment/Decrement
let count = 0;
count++;   // count is now 1
count--;   // count is now 0
// Exercise 2: String Operations
let firstName = "Gilbert";
let lastName = "Mungai";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Gilbert"));

// Exercise 3: Comparison & Logical Operators
// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Challenge: Calculate age in different units
let userAge = 18; 
let ageInDays = userAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = 2026 + (100 - userAge);

console.log(`Age in days: ${ageInDays}`);
console.log(`Age in hours: ${ageInHours}`);
console.log(`You'll turn 100 in the year: ${yearTurn100}`);// Task 7.3: Functions - Exercise 1

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test
console.log(greet("Gilbert"));
console.log(add(10, 5));
console.log(multiply(4, 3));
console.log(divide(10, 2));
// Task 7.3: Functions - Exercise 2

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0].charAt(0) + names[1].charAt(0);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test
console.log(calculateArea(10, 5));           // 50
console.log(celsiusToFahrenheit(0));         // 32
console.log(isEven(4));                      // true
console.log(getInitials("Gilbert Mungai"));  // GM
console.log(reverseString("hello"));         // olleh