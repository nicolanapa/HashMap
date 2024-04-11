class Bucket {
	constructor(nonHashedKey) {
		this.nonHashedKey = [nonHashedKey];
	}
}

class HashSet {
	constructor() {
		this.buckets = [];
		this.buckets.length = 16;
		console.log(this.buckets);
	}

	// Hashes a given key to any number from 0 to length of bucket
	// Working, updated
	hash(key) {
		console.log("Hashing:", key);

		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);

			hashCode = hashCode % this.buckets.length;
		}

		console.log("Your hashed key:", hashCode);
		return hashCode;
	}

	// Key assigned to value if there isn't a Key with the same key
	// Updates a key's value with a new value if there's already a key
	// Working, updated
	set(key, value) {
		console.log("Trying to set/overwrite", key, "with", value);

		this.growth();
		let nonHashedKey = key;
		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				this.buckets[hashedKey] = new Bucket(nonHashedKey, value);

				console.log("Your new hashedKey:", hashedKey);
				console.log("Your new value:", this.buckets[hashedKey].value[0]);
			} else {
				if (this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey) >= 0) {
					// If there's the key
					let temp = this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey);
					this.buckets[hashedKey].value[temp] = value;

					console.log("Your overwrited value:", this.buckets[hashedKey].value[temp]);
				} else if (this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey) === -1) {
					// Different key

					this.buckets[hashedKey].nonHashedKey.push(nonHashedKey);
					this.buckets[hashedKey].value.push(value);
				}
			}
		}
	}

	// Returns a value assigned to a given key, otherwise null
	// Working, updated
	get(key) {
		console.log("Getting value assigned to:", key);

		let nonHashedKey = key;
		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				return null;
			} else {
				if (this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey) >= 0) {
					let temp = this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey);
					return this.buckets[hashedKey].value[temp];
				} else {
					return null;
				}
			}
		}
	}

	// Returns true if it has key, otherwise false
	// Working, updated
	has(key) {
		console.log("Checking if it has:", key);

		let nonHashedKey = key;
		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				return false;
			} else {
				if (this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey) >= 0) {
					return true;
				} else {
					return false;
				}
			}
		}
	}

	// Removes and returns true if a element has a given key, otherwise returns only false
	// Working, updated
	remove(key) {
		console.log("Trying to remove element with key:", key);

		let nonHashedKey = key;
		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				return false;
			} else {
				if (this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey) >= 0) {
					let temp = this.buckets[hashedKey].nonHashedKey.indexOf(nonHashedKey);
					this.buckets[hashedKey].nonHashedKey[temp] = undefined;
					this.buckets[hashedKey].value[temp] = undefined;

					this.buckets[hashedKey].nonHashedKey = this.buckets[hashedKey].nonHashedKey.filter(function (element) {
						return element !== undefined;
					});
					this.buckets[hashedKey].value = this.buckets[hashedKey].value.filter(function (element) {
						return element !== undefined;
					});

					return true;
				} else {
					return false;
				}
			}
		}
	}

	// Returns the number of stored keys
	// Working, updated
	length() {
		console.log("Getting length...");

		let stored = 0;

		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] === undefined) {
			} else if (this.buckets[i].nonHashedKey !== undefined) {
				for (let i2 = 0; i2 < this.buckets[i].nonHashedKey.length; i2++) {
					stored += 1;
				}
			}
		}

		return stored;
	}

	// Removes everything in a hash map but keeps the length
	// Working, updated
	clear() {
		console.log("Removing everything...");

		let i = this.buckets.length;
		this.buckets = [];
		this.buckets.length = i;
	}

	// Returns an array containing all the keys
	// Working, updated
	keys() {
		console.log("Returning all keys...");

		let array = [];

		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] === undefined) {
			} else if (this.buckets[i].nonHashedKey !== undefined) {
				array.push(this.buckets[i].nonHashedKey);
			}
		}

		return array;
	}

	// Same as keys() but returns all the values in an array
	// Working, updated
	values() {
		console.log("Returning all values...");

		let array = [];

		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] === undefined) {
			} else if (this.buckets[i].value !== undefined) {
				array.push(this.buckets[i].value);
			}
		}

		return array;
	}

	// Returns an array that contains each (key, value) pair
	// [[firstKey, firstValue], [secondKey, secondValue]]
	// Working, updated
	entries() {
		console.log("Returning all entries...");

		let array = [];
		let array2 = [];

		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i] === undefined) {
			} else {
				array2 = [];

				array2.push(this.buckets[i].nonHashedKey);
				array2.push(this.buckets[i].value);

				array.push(array2);
			}
		}

		return array;
	}

	// Grows the bucket when the used values take up 0.4 of a bucket
	// Working, updated
	growth() {
		let stored = this.length();

		if (stored >= 0.6 * this.buckets.length) {
			this.buckets.length *= 2;

			console.log("New length:", this.buckets.length);
		}
	}
}

export { Bucket, HashSet };
