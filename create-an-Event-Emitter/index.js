// please complete the implementation
class EventEmitter {
	#listeners = {};

	subscribe(eventName, callback) {
		if (!this.#listeners.hasOwnProperty(eventName)) {
			this.#listeners[eventName] = [];
		}

		const index = this.#listeners[eventName].push(callback) - 1;

		return {
			release: () => delete this.#listeners[eventName][index],
		};
	}

	emit(eventName, ...args) {
		this.#listeners[eventName]?.forEach(listener => listener(...args));
	}
}
