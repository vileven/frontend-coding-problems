function merge1By1(arr1, arr2) {
	let p1 = 0;
	let p2 = 0;

	let result = [];
	while (p1 < arr1.length || p2 < arr2.length) {
		let nextEl;
		switch (true) {
			case p1 === arr1.length:
			case arr1[p1] >= arr2[p2]:
				nextEl = arr2[p2++];
				break;
			case p2 === arr2.length:
			case arr1[p1] < arr2[p2]:
				nextEl = arr1[p1++];
		}

		result.push(nextEl);
	}

	return result;
}

// time N log K
// space N
/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */
function merge(arrList) {
	let interval = 1;

	if (!arrList.length) {
		return [];
	}

	while (interval < arrList.length) {
		// 1&2 3&4 5&6  - interval - 1
		// 1&3 5&7 9&.. - interval - 2
		// 1&5 9&         interval - 4
		for (let i = 0; i < arrList.length - interval; i += interval * 2) {
			if (!arrList[i + interval]) {
				continue;
			}
			arrList[i] = merge1By1(arrList[i], arrList[i + interval]);
		}
		interval *= 2;
	}

	return arrList[0];
}

module.exports = {merge, merge1By1};
