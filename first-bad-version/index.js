/**
 * @param {(version: number) => boolean} isBad
 */
function firstBadVersion(isBad) {
	// binary search lower bound of negative results
	return version => {
		let left = 0;
		let right = version + 1;

		while (left < right) {
			const mid = left + Math.floor((right - left) / 2);

			if (!isBad(mid)) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}

		return left <= version ? left : -1;
	};
}
