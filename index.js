/*
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
*/
class Node {
	constructor(hashedKey, value) {
		this.hashedKey = hashedKey;
		this.value = value;
	}
}

class HashMap {
	constructor() {
		this.buckets = [];
		this.buckets.length = 16;
		console.log(this.buckets);
	}

	hash(key) {
		console.log("Hashing:", key);

		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);

			hashCode = hashCode % 16;
		}

		// To remove?
		console.log("Your hashed key:", hashCode);
		return hashCode;
	}

	// Key assigned to value if there isn't a Key with the same key
	// Updates a key's value with a new value if there's already a key
	// Working halfly
	set(key, value) {
		console.log("Trying to set/overwrite", key, "with", value);

		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				this.buckets[hashedKey] = new Node(hashedKey, value);

				console.log("Your new hashedKey:", this.buckets[hashedKey].hashedKey);
				console.log("Your new value:", this.buckets[hashedKey].value);
			} else {
				if (this.buckets[hashedKey].hashedKey === hashedKey) {
					console.log("Overwriting:", this.buckets[hashedKey].value);

					this.buckets[hashedKey].value = value;

					console.log("Your overwrited value:", this.buckets[hashedKey].value);
				}
			}
		}
	}

	// Returns a value assigned to a given key, otherwise null
	// Working
	get(key) {
		console.log("Getting value assigned to:", key);

		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				return null;
			} else {
				return this.buckets[hashedKey].value;
			}
		}
	}

	// Returns true if it has key, otherwise false
	// Working
	has(key) {
		console.log("Checking if it has:", key);

		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				return false;
			} else if (this.buckets[hashedKey].hashedKey === hashedKey) {
				return true;
			} else {
				return false;
			}
		}
	}

	// Removes and returns true if a element has a given key, otherwise returns only false
	// Working
	remove(key) {
		console.log("Trying to remove element with key:", key);

		let hashedKey = this.hash(key);

		if (this.hashedKey < 0 || hashedKey >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		} else {
			if (this.buckets[hashedKey] === undefined) {
				return false;
			} else if (this.buckets[hashedKey].hashedKey === hashedKey) {
				this.buckets[hashedKey] = undefined;
				return true;
			} else {
				return false;
			}
		}
	}

	length() {}

	clear() {}

	keys() {}

	values() {}

	entries() {}
}

function test() {
	let prova0 = new HashMap();
	//prova0.hash("Luca");
	prova0.set("Luca", "Agente 000");
	console.log();
	prova0.set("Luca", "Agente 007");
	console.log();

	console.log(prova0.get("Luca"));
	console.log();
	console.log(prova0.has("Luca"));
	console.log();
	console.log(prova0.has("Lucas"));
	console.log();

	// Marco1 === Luca === 7
	prova0.set("Marco", "Agente 0010");
	console.log();
	console.log(prova0.remove("Marco"));
	console.log();
	console.log(prova0.get("Marco"));
	console.log();
	console.log(prova0.has("Marco"));
	console.log();
}

test();
