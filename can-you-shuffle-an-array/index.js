/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		const randomIndex = i + Math.floor(Math.random() * (arr.length - i));
		[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
	}
}
