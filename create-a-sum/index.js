/**
 * @param {number} num
 */
function sum(num) {
	const curriedSum = function (nextNum) {
		return nextNum ? sum(nextNum + num) : num;
	};

	curriedSum.sum = num;
	curriedSum.valueOf = function () {
		return this.sum;
	};
	curriedSum.toString = function () {
		return this.sum;
	};

	return curriedSum;
}

module.exports = sum;
