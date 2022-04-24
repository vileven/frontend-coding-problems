class Stack {
	#data = [];
	push(element) {
		this.#data.push(element);
	}
	peek() {
		// get the top element
		return this.#data[this.#data.length - 1];
	}
	pop() {
		// remove the top element
		return this.#data.pop();
	}
	size() {
		// count of element
		return this.#data.length;
	}
}

// you need to complete the following Class
class Queue {
	#enterStack = new Stack();
	#exitStack = new Stack();

	queuefy() {
		while (this.#enterStack.size()) {
			this.#exitStack.push(this.#enterStack.pop());
		}
	}

	enqueue(element) {
		// add new element to the rare
		this.#enterStack.push(element);
	}
	peek() {
		// get the head element
		this.queuefy();
		return this.#exitStack.peek();
	}
	size() {
		// return count of element
		return this.#enterStack.size() + this.#exitStack.size();
	}
	dequeue() {
		// remove the head element
		// this.#secondStack.push(this.#stack.pop());
		this.queuefy();
		return this.#exitStack.pop();
	}
}
