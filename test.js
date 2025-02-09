import { HashMap } from "./index.js";

// Create a new HashMap instance and set the load factor to 0.75
const test = new HashMap();
test.loadFactor = 0.75;

// Populate the hash map with initial data
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Test the length and load factor before resizing
console.log("Length before resizing:", test.length()); // Should be 12
console.log("Load factor before resizing:", test.size / test.capacity);

// Overwrite a few nodes
test.set('apple', 'green');
test.set('banana', 'yellowish');

// Test length and capacity after overwriting (should not increase length)
console.log("Length after overwriting:", test.length()); // Should still be 12
console.log("Load factor after overwriting:", test.size / test.capacity);

// Add the last item to trigger resizing
test.set('moon', 'silver');

// Test length and load factor after resizing (should drop load factor)
console.log("Length after resizing:", test.length()); // Should be 13
console.log("Load factor after resizing:", test.size / test.capacity); // Should be below 0.75

// Test the get, has, and remove methods
console.log("Get 'apple':", test.get('apple')); // Should return 'green'
console.log("Has 'banana':", test.has('banana')); // Should return true
console.log("Has 'grape':", test.has('grape')); // Should return true
console.log("Remove 'dog':", test.remove('dog')); // Should return true
console.log("Has 'dog' after remove:", test.has('dog')); // Should return false

// Test length after removal
console.log("Length after removal:", test.length()); // Should be 12

// Test the clear method
test.clear();
console.log("Length after clear:", test.length()); // Should be 0

// Re-populate and test keys(), values(), and entries()
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');

console.log("Keys:", test.keys()); // Should return ['apple', 'banana', 'carrot']
console.log("Values:", test.values()); // Should return ['red', 'yellow', 'orange']
console.log("Entries:", test.entries()); // Should return [['apple', 'red'], ['banana', 'yellow'], ['carrot', 'orange']]