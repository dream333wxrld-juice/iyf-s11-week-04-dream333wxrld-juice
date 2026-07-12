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
// Task 7.3: Functions - Exercise 3: Default Parameters

function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());              // Hello, Guest!
console.log(greetWithDefault("Alice"));       // Hello, Alice!
console.log(greetWithDefault("Bob", "Hi"));   // Hi, Bob!

// Challenge: Tip Calculator
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log(calculateTip(100));      // 15
console.log(calculateTip(100, 20));  // 20
console.log(calculateTip(50, 10));   // 5
// Task 7.4: Control Flow - Exercise 1: If/Else Statements

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test
console.log(getGrade(95));  // A
console.log(getGrade(85));  // B
console.log(getGrade(75));  // C
console.log(getGrade(65));  // D
console.log(getGrade(50));  // F
// Task 7.4: Control Flow - Exercise 2: Switch Statements

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// Test
console.log(getDayName(0));  // Sunday
console.log(getDayName(1));  // Monday
console.log(getDayName(3));  // Wednesday
console.log(getDayName(7));  // Invalid day
// Task 7.4: Control Flow - Exercise 3: Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Build: 1. Print numbers 1-100
function printNumbers1to100() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

// Build: 2. Print only even numbers 1-50
function printEvenNumbers() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Build: 3. FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Build: 4. Print a triangle of stars
function printTriangle(rows = 5) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

// Test the build programs
printTriangle(5);
// Task 8.1: Arrays - Exercise 1: Array Basics

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);      // apple
console.log(fruits.length);  // 3

// Modifying arrays
fruits.push("grape");        // Add to end
fruits.unshift("mango");     // Add to start
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start

// Test
console.log(fruits);         // ["mango", "apple", "banana", "orange"]
console.log(numbers);        // [1, 2, 3, 4, 5]
console.log(mixed);          // ["hello", 42, true, null]
// Task 8.1: Arrays - Exercise 2: Array Methods

const numbers = [1, 2, 3, 4, 5];

// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);  // 2

// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// includes - check if element exists
console.log(numbers.includes(3));  // true

// Build challenges
// 1. Double all numbers
const buildDoubled = numbers.map(num => num * 2);
console.log(buildDoubled);  // [2, 4, 6, 8, 10]

// 2. Filter out negative numbers
const mixedNumbers = [1, -2, 3, -4, 5];
const positiveOnly = mixedNumbers.filter(num => num > 0);
console.log(positiveOnly);  // [1, 3, 5]

// 3. Find first number greater than 10
const largeNumbers = [5, 8, 15, 3, 20];
const firstGreater10 = largeNumbers.find(num => num > 10);
console.log(firstGreater10);  // 15

// 4. Calculate product of all numbers
const product = numbers.reduce((total, num) => total * num, 1);
console.log(product);  // 120
// Task 8.2: Objects - Exercise 1: Object Basics

// Creating objects
const person = {
    firstName: "Gilbert",
    lastName: "Mungai",
    age: 18,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log(person.firstName);           // Dot notation
console.log(person["lastName"]);         // Bracket notation
console.log(person.address.city);        // Nested

// Modifying properties
person.age = 18;
person.email = "dream333wxrld@gmail.com";    // Add new property
delete person.isStudent;                 // Remove property

// Test
console.log(person);
console.log(person.firstName);           // Gilbert
console.log(person.address.country);     // Kenya
// Task 8.2: Objects - Exercise 2: Object Methods

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(4, 2));  // 8
// Task 8.2: Objects - Exercise 3: Object Iteration

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));        // ["math", "english", "science"]

// Get values
console.log(Object.values(scores));      // [95, 88, 92]

// Get entries
console.log(Object.entries(scores));     // [["math", 95], ["english", 88], ...]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}
// Task 8.3: Array of Objects - Working with Real Data

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log(names);  // ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log(avgGrade);  // 86

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);  // true

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);  // true
