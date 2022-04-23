function curry(fn) {
	return function curried(...args) {
		const complete =
			args.length >= fn.length &&
			!args.slice(0, fn.length).includes(curry.placeholder);

		if (complete) {
			return fn(...args);
		}

		return (...restArgs) => {
			const newArgs = args.map(arg =>
				arg === curry.placeholder && restArgs.length
					? restArgs.shift()
					: arg,
			);

			return curried(...newArgs, ...restArgs);
		};
	};
}

curry.placeholder = Symbol('placeholder');

module.exports = curry;
