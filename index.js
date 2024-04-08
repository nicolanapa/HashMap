/*
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
*/

class HashMap {
    constructor() {
        let array = [];
        array.length = 16;
    }

	hash(key) {
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
	set(key, value) {

    }

	get(key) {}

	has(key) {}

	remove(key) {}

	length() {}

	clear() {}

	keys() {}

	values() {}

	entries() {}
}

function test() {
    let prova0 = new HashMap();
    //prova0.hash("Luca");
    prova0.set("Luca", "007");
}

test();