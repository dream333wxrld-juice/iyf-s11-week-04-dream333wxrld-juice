// Day 3: Find Largest Number

// Approach 1: Using a loop
function findLargestLoop(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Approach 2: Using reduce()
function findLargestReduce(arr) {
    return arr.reduce((max, current) => current > max ? current : max);
}

// Test
console.log(findLargestLoop([3, 7, 2, 9, 1]));      // 9
console.log(findLargestReduce([3, 7, 2, 9, 1]));    // 9
console.log(findLargestLoop([10, 50, 20, 30]));     // 50
console.log(findLargestReduce([10, 50, 20, 30]));   // 50