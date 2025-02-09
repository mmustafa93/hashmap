class HashMap {
    constructor(capacity = 16, loadFactor = 0.75){
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = new Array(capacity);
    }

    hash = (key) => {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key); // Generate the index using hash function
    
        if (!this.buckets[index]) { 
            this.buckets[index] = []; // Initialize bucket if it doesn’t exist
        }
    
        for (let entry of this.buckets[index]) { 
            if (entry[0] === key) { 
                entry[1] = value; // Update existing key-value pair
                return; // Exit early to prevent duplicate keys and avoid size increment
            }
        }
    
        this.buckets[index].push([key, value]); // Store new key-value pair
        this.size++; // Increase size when a new key-value pair is added
    
        // Check if resizing is needed (if load factor exceeded)
        if (this.size / this.capacity > this.loadFactor) {
            this.resize(); // Call the resize method
        }
    }

    resize() {
        // Double the capacity
        this.capacity *= 2;

        // Save the old buckets
        let oldBuckets = this.buckets;
        this.buckets = new Array(this.capacity); // Create a new array with the doubled capacity

        // Rehash all existing entries into the new buckets
    for (let i = 0; i < oldBuckets.length; i++) {
        if (oldBuckets[i]) {
            for (let entry of oldBuckets[i]) {
                let index = this.hash(entry[0]); // Recompute index for the new bucket array
                if (!this.buckets[index]) {
                    this.buckets[index] = [];
                }
                this.buckets[index].push(entry); // Push the rehashed key-value pair
            }
        }
    }

    }

    get(key) {
        let index = this.hash(key); // Generate index using hash function
    
        if (this.buckets[index]) { 
            for (let entry of this.buckets[index]) { 
                if (entry[0] === key) { // Check if the key matches
                    return entry[1]; // Return the associated value
                }
            }
        }
        
        return null; // Return null if key is not found
    }

    has(key) {
        let index = this.hash(key); // Generate index using hash function
    
        if (this.buckets[index]){ // Check if an entry exists at the generated index
            for (let entry of this.buckets[index]){
                if (entry[0] === key){ // Check if the entry matches the key
                    return true; // Return true if exists
                }
            }
        }

        return false; // Return false if the key is not in the hash map
    }

    remove(key) {
        let index = this.hash(key); // Generate index using hash function
    
        if (this.buckets[index]) { // Check if an entry exists at the generated index
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i][0] === key) { // Check if the entry matches the key
                    this.buckets[index].splice(i, 1); // Remove the entry from the array
                    this.size--; // Decrease the size
                    return true; // Return true
                }
            }
        }
    
        return false; // Return false if the key isn't in the hash map
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        let keys = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) { // If there's a bucket at this index
                for (let entry of this.buckets[i]) { // Iterate over the linked list at this index
                    keys.push(entry[0]); // Push the key (entry[0])
                }
            }
        }

        return keys;
    }

    values() {
        let values = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) { // If there's a bucket at this index
                for (let entry of this.buckets[i]) { // Iterate over the linked list at this index
                    values.push(entry[1]); // Push the value (entry[1])
                }
            }
        }

        return values;
    } 

    entries() {
        let entries = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) { // If there's a bucket at this index
                for (let entry of this.buckets[i]) { // Iterate over the linked list at this index
                    entries.push(entry); // Push the key-value (entry)
                }
            }
        }

        return entries;
    }
}

export { HashMap }