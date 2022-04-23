const {flatRecursive} = require('./index.js');

describe('implement-Array-prototype.flat', () => {
	it('should work recursive 1', () => {
		expect(flatRecursive([1, [2], [3, [4]]])).toStrictEqual([1, 2, 3, [4]]);
	});

	it('should work recursive 2', () => {
		expect(flatRecursive([1, [2], [3, [4]]], 2)).toStrictEqual([
			1, 2, 3, 4,
		]);
	});
});
