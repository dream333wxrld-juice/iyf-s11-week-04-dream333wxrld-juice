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
console.log(`You'll turn 100 in the year: ${yearTurn100}`);