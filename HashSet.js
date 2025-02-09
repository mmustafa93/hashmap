class HashSet {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = new Array(capacity);
    }

    // Hash function (same as HashMap)
    hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    // Add a key to the HashSet
    add(key) {
        let index = this.hash(key); // Generate the index using hash function
        
        if (!this.buckets[index]) {
            this.buckets[index] = []; // Initialize bucket if it doesn’t exist
        }
        
        // Check if the key already exists
        for (let entry of this.buckets[index]) {
            if (entry === key) {
                return; // Key already exists, no need to add it again
            }
        }

        // Add the key to the bucket
        this.buckets[index].push(key);
        this.size++; // Increase size when a new key is added

        // Check if resizing is needed (if load factor exceeded)
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    // Resize the HashSet when load factor exceeds the threshold
    resize() {
        // Double the capacity
        this.capacity *= 2;
        
        // Save the old buckets
        let oldBuckets = this.buckets;
        this.buckets = new Array(this.capacity); // Create a new array with the doubled capacity
        
        // Rehash all existing keys into the new buckets
        for (let i = 0; i < oldBuckets.length; i++) {
            if (oldBuckets[i]) {
                for (let entry of oldBuckets[i]) {
                    let index = this.hash(entry); // Recompute index for the new bucket array
                    if (!this.buckets[index]) {
                        this.buckets[index] = [];
                    }
                    this.buckets[index].push(entry); // Push the rehashed key
                }
            }
        }
    }

    // Check if the key exists in the HashSet
    has(key) {
        let index = this.hash(key); // Generate index using hash function
        
        if (this.buckets[index]) {
            for (let entry of this.buckets[index]) {
                if (entry === key) {
                    return true; // Return true if key is found
                }
            }
        }

        return false; // Return false if key isn't in the hash set
    }

    // Remove a key from the HashSet
    remove(key) {
        let index = this.hash(key); // Generate index using hash function
        
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i] === key) {
                    this.buckets[index].splice(i, 1); // Remove the key
                    this.size--; // Decrease size
                    return true; // Return true
                }
            }
        }

        return false; // Return false if key isn't found
    }

    // Get the number of keys in the HashSet
    length() {
        return this.size;
    }

    // Clear the HashSet
    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    // Get all keys in the HashSet
    keys() {
        let keys = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (let entry of this.buckets[i]) {
                    keys.push(entry); // Push the key
                }
            }
        }

        return keys;
    }
}

export { HashSet };