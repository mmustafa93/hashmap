# HashMap and HashSet Implementation

## Overview

This project implements a basic HashMap and HashSet in JavaScript. Both the `HashMap` and `HashSet` are built from scratch, allowing for key-value storage (in the case of `HashMap`) and key-only storage (in the case of `HashSet`). The implementation includes resizing functionality for both structures when the load factor exceeds a threshold.

### Features:
- **HashMap**: Stores key-value pairs, allowing for fast lookup, insertion, and removal operations. It includes resizing logic to maintain efficient operations.
- **HashSet**: Stores only keys, similar to a `HashMap` but without values. It supports fast operations like adding, checking, and removing keys.

## Project Structure

/src
/HashMap.js        // HashMap implementation
/HashSet.js        // HashSet implementation
/test.js           // Test file for HashMap 
/hashSetTest.js    // Test file for HashSet

## HashMap Class

The `HashMap` class provides a basic implementation of a hash map with the following methods:
- `set(key, value)`: Adds a key-value pair to the map.
- `get(key)`: Retrieves the value associated with a key.
- `has(key)`: Checks if the key exists in the map.
- `remove(key)`: Removes the key-value pair.
- `length()`: Returns the number of key-value pairs in the map.
- `clear()`: Clears all entries from the map.
- `keys()`: Returns an array of all keys in the map.
- `values()`: Returns an array of all values in the map.
- `entries()`: Returns an array of all key-value pairs in the map.

## HashSet Class

The `HashSet` class implements a similar structure to the `HashMap` but only stores keys without values. It includes the following methods:
- `add(key)`: Adds a key to the set.
- `has(key)`: Checks if the key exists in the set.
- `remove(key)`: Removes a key from the set.
- `length()`: Returns the number of keys in the set.
- `clear()`: Clears all keys from the set.
- `keys()`: Returns an array of all keys in the set.

## Testing

The `test.js` file contains tests for both the `HashMap` and `HashSet` classes. These tests verify that all methods are functioning correctly.

To run the tests, simply execute the following command in your terminal:

node test.js

## Usage

1. Clone the repository:

git clone https://github.com/mmustafa93/hashmap.git

2. Navigate to the project folder:

cd hashmap-hashset-project

3. Run the tests:

node test.js
node hashSetTest.js

## License

This project is open source and available under the [MIT License](LICENSE).
