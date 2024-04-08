class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.listHead = null;
	}

	// Appends it at the end of a list
	// Working
	append(value) {
		console.log("Appending", "'" + value + "'", "to the end");

		let new_node = new Node(value);

		if (this.listHead === null) {
			this.listHead = new_node;
		} else {
			let last = this.listHead;

			while (last.nextNode !== null) {
				last = last.nextNode;
			}

			last.nextNode = new_node;
		}

		return this.listHead;
	}

	// Prepends it at the start of a list
	// Working
	prepend(value) {
		console.log("Prepending", "'" + value + "'", "to the start");

		let new_node = new Node(value);
		new_node.nextNode = this.listHead;
		this.listHead = new_node;

		return this.listHead;
	}

	// Returns the size of a list
	// 1 to i
	// Working
	size() {
		console.log("Calculating size...");

		let i = 0;
		let current = this.listHead;

		while (current !== null) {
			i += 1;
			current = current.nextNode;
		}

		return i;
	}

	// Returns the head (first node) of a list
	// Working
	head() {
		console.log("Returning head (", this.listHead.value, ")");

		return this.listHead.value;
	}

	// Returns the tail (last node) of a list
	// Working
	tail() {
		console.log("Returning tail...");
		let current = this.listHead;

		while (current.nextNode !== null) {
			current = current.nextNode;
		}

		return current.value;
	}

	// Returns the node (value) at a specific index of a list
	// 0 to i
	// Working
	at(index) {
		console.log("Returning your node at", index);

		let current = this.listHead;
		for (let i = 0; i < index; i++) {
			if (current.nextNode === null || current.nextNode === undefined) {
				return console.log("Overflow!");
			}
			current = current.nextNode;
		}

		return current.value;
	}

	// Removes the last element/node from a list
	// Working
	pop() {
		console.log("Removing last node...");
		let current = this.listHead;

		while (current.nextNode.nextNode !== null) {
			current = current.nextNode;
		}

		console.log("Removed:", current.nextNode.value);
		current.nextNode = null;

		return current;
	}

	// Returns true if a list contains a given value, otherwise false
	// Working
	contains(value) {
		console.log("Checking if it contains:", value);

		let current = this.listHead;

		while (current.nextNode !== null) {
			if (current.value === value) {
				return true;
			}
			current = current.nextNode;
		}

		if (current.value === value) {
			return true;
		} else {
			return false;
		}
	}

	// Returns the index of the node containing a given value, otherwise null
	// 0 to i
	// Working
	find(value) {
		console.log("Finding:", value);

		let i = -1;
		let current = this.listHead;

		while (current.nextNode !== null) {
			i += 1;

			if (current.value === value) {
				return i;
			}
			current = current.nextNode;
		}

		if (current.value === value) {
			i += 1;
			return i;
		} else {
			return null;
		}
	}

	// Return the whole list to a string readable format
	// Working
	toString() {
		console.log("Converting toString" /*, JSON.stringify(this.listHead, null, 4)*/);

		let string = "";
		let current = this.listHead;

		while (current !== null) {
			string += "( " + current.value + " ) -> ";
			current = current.nextNode;
		}

		string += null;
		return string;
	}

	// Inserts a new node with a given value at the given index in a list
	//	0 to index
	// Working
	insertAt(value, index) {
		console.log("Trying to insert:", value, "in", index);

		if (index === 0) {
			return this.prepend(value);
		} else if (index === -1) {
			return this.append(value);
		} else {
			let iSize = this.size() - 1;
			console.log(iSize);
			if (index > iSize) {
				// Just warning the user
				console.log("You have apparently inputted an index higher than the size of the list");
				console.log("So we're appending it at the end of the list");

				return this.append(value);
			} else {
				let new_node = new Node(value);

				let current = this.listHead;

				for (let i = 0; i < index - 1; i++) {
					current = current.nextNode;
				}

				let current2 = current.nextNode;
				current.nextNode = new_node;

				for (let i = index - 1; i <= iSize; i++) {
					new_node.nextNode = current2;
				}

				return this.listHead;
			}
		}
	}

	// Removes a node at a given index in a list
	// 0 to index
	// Working
	removeAt(index) {
		console.log("Trying to remove node at index", index);

		if (index === -1) {
			return this.pop();
		} else {
			let iSize = this.size() - 1;
			console.log(iSize);
			if (index >= iSize) {
				// Just warning the user
				console.log("You have apparently inputted an index higher than the size of the list");
				console.log("So we're popping/removing the last element.");

				return this.pop();
			} else {
				let current = this.listHead;

				for (let i = 0; i < index - 1; i++) {
					current = current.nextNode;
				}

				current.nextNode = current.nextNode.nextNode;

				return this.listHead;
			}
		}
	}
}

export { Node, LinkedList };
