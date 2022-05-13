const SYM_ID = Symbol();

class NodeStore {
	#cache = {};

	/**
	 * @param {Node} node
	 * @param {any} value
	 */
	set(node, value) {
		const sym = Symbol();
		node[SYM_ID] = sym;
		this.#cache[sym] = value;
	}
	/**
	 * @param {Node} node
	 * @return {any}
	 */
	get(node) {
		return this.#cache[node[SYM_ID]];
	}

	/**
	 * @param {Node} node
	 * @return {Boolean}
	 */
	has(node) {
		return this.get(node) !== undefined;
	}
}
