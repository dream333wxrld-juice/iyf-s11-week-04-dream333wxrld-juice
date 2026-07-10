// Day 4: Remove Duplicates

// Approach 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// Approach 2: Using filter with indexOf
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Test
console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5]));      // [1, 2, 3, 4, 5]
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));   // [1, 2, 3, 4, 5]
console.log(removeDuplicatesSet([5, 5, 5, 1, 1, 2]));         // [5, 1, 2]
console.log(removeDuplicatesFilter([5, 5, 5, 1, 1, 2]));      // [5, 1, 2]