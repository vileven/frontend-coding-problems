function throttle(func, wait) {
	let timeoutId = null;
	let lastArgs = null;
	let lastContext = null;

	const waiter = () => {
		if (lastArgs) {
			func.apply(lastContext, lastArgs);
			lastArgs = null;
			lastContext = null;
			timeoutId = setTimeout(waiter, wait);
		} else {
			timeoutId = null;
		}
	};

	return function (...args) {
		const throttled = timeoutId !== null;

		// if throttled should save new args and return
		if (throttled) {
			lastContext = this;
			lastArgs = args;
			return;
		}

		func.apply(this, args);

		// and starting throttle
		timeoutId = setTimeout(waiter, wait);
	};
}

module.exports = throttle;
