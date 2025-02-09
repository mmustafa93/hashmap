import { HashSet } from "./HashSet.js";

const set = new HashSet();

set.add('apple');
set.add('banana');
set.add('carrot');
set.add('dog');

console.log(set.length()); // Should be 4
console.log(set.has('apple')); // Should be true
console.log(set.has('orange')); // Should be false
set.remove('banana');
console.log(set.length()); // Should be 3
console.log(set.keys()); // Should return ['apple', 'carrot', 'dog']
set.clear();
console.log(set.length()); // Should be 0