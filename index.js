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
    
        // TODO: Implement resizing when load factor is exceeded
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
}