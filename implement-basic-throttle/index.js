function throttle(func, wait) {
	let timeoutId = null;
	let hasThrottled = false;
	let lastArgs = null;

	const waiter = () => {
		if (lastArgs) {
			func(...lastArgs);
		}
		hasThrottled = false;
		timeoutId = null;
	};

	return function (...args) {
		if (!timeoutId) {
			timeoutId = setTimeout(waiter, wait);
		}

		if (!hasThrottled) {
			func(...args);
		} else {
			lastArgs = args;
		}

		hasThrottled = true;
	};
}

module.exports = throttle;
