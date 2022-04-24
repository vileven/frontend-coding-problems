/**
 * @param {Function} func
 * @param {number} delay
 * @param {number} period
 * @return {number}
 */
function mySetInterval(func, delay, period) {
	let count = 0;
	let generatedMyId = Math.floor(Date.now() * Math.random());

	const iterate = () => {
		func();
		mySetInterval.idsMap[generatedMyId] = setTimeout(
			iterate,
			delay + ++count * period,
		);
	};

	mySetInterval.idsMap[generatedMyId] = setTimeout(iterate, delay);

	return generatedMyId;
}

mySetInterval.idsMap = {};

/**
 * @param { number } id
 */
function myClearInterval(id) {
	clearTimeout(mySetInterval.idsMap[id]);
}
