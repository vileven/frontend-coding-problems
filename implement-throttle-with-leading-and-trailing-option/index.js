function throttle(
	func,
	wait,
	{leading, trailing} = {leading: true, trailing: true},
) {
	let timeoutId = null;
	let lastArgs = null;
	let lastContext = null;

	const waiter = () => {
		if (lastArgs && trailing) {
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

		// otherwise, if it has option `leading` should call function else just save args
		if (leading) {
			func.apply(this, args);
		} else {
			lastContext = this;
			lastArgs = args;
		}

		// and starting throttle
		timeoutId = setTimeout(waiter, wait);
	};
}
