function debounce(func, wait) {
	let timeoutId = null;

	return function (...args) {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func.apply(this, args);
			timeoutId = null;
		}, wait);
	};
}
