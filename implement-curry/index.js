function curry(fn) {
	return (...args) => {
		if (fn.length <= args.length) {
			return fn(...args);
		} else {
			const partialFn = fn.bind(null, ...args);
			return curry(partialFn);
		}
	};
}

module.exports = curry;
