const {merge, merge1By1} = require('./index.js');

describe('merge-sorted-arrays', () => {
	it('should work 1by1', () => {
		expect(merge1By1([1, 1, 1, 100, 1000, 10000], [2, 3, 3])).toStrictEqual(
			[1, 1, 1, 2, 3, 3, 100, 1000, 10000],
		);
	});
	it('should work with test case', () => {
		expect(
			merge([
				[1, 1, 1, 100, 1000, 10000],
				[1, 2, 2, 2, 200, 200, 1000],
				[1000000, 10000001],
				[2, 3, 3],
			]),
		).toStrictEqual([
			1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 100, 200, 200, 1000, 1000, 10000,
			1000000, 10000001,
		]);
	});
});
