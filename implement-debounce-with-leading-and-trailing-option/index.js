function debounce(
	func,
	wait,
	{leading, trailing} = {leading: false, trailing: true},
) {
	let timeoutId = null;

	return function (...args) {
		let alreadyInvoked = false;

		// if leading, and we aren't wait — invoke function
		if (timeoutId === null && leading) {
			func.apply(this, args);
			alreadyInvoked = true;
		}

		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			// if trailing and we haven't invoked function — invoke
			if (trailing && !alreadyInvoked) {
				func.apply(this, args);
			}
			timeoutId = null;
		}, wait);
	};
}
