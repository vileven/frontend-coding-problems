function flatRecursive(arr, depth = 1) {
	return arr.reduce((acc, el) => {
		if (Array.isArray(el) && depth > 0) {
			acc.push(...flatRecursive(el, depth - 1));
		} else {
			acc.push(el);
		}

		return acc;
	}, []);
}

module.exports = {flatRecursive};
