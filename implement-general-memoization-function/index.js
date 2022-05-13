/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver = (...args) => args.join('_')) {
	const cache = new Map();

	return function (...args) {
		const key = resolver(...args);

		if (!cache.has(key)) {
			cache.set(key, func.apply(this, args));
		}

		return cache.get(key);
	};
}
