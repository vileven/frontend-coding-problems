const update = require('./index.js');

describe('implement-Immutability-helper', () => {
	it('should work with push', () => {
		expect(update([1, 2, 3, 4], {$push: [5, 6]})).toStrictEqual([
			1, 2, 3, 4, 5, 6,
		]);
	});

	it('should update object using $set', () => {
		expect(
			update(
				{
					a: {
						b: {
							c: 1,
						},
					},
					d: 2,
				},
				{a: {b: {c: {$set: 3}}}},
			),
		).toStrictEqual({
			a: {
				b: {
					c: 3,
				},
			},
			d: 2,
		});
	});

	it('should work with array and set', () => {
		expect(update([1, 2, 3, 4], {0: {$set: 0}})).toStrictEqual([
			0, 2, 3, 4,
		]);
	});

	it('should work with $merge', () => {
		expect(
			update(
				{
					a: {
						b: {
							c: 1,
						},
					},
					d: 2,
				},
				{a: {b: {$merge: {e: 5}}}},
			),
		).toStrictEqual({
			a: {
				b: {
					c: 1,
					e: 5,
				},
			},
			d: 2,
		});
	});

	it('should work with apply', () => {
		expect(
			update([1, 2, 3, 4], {0: {$apply: item => item * 2}}),
		).toStrictEqual([2, 2, 3, 4]);
	});
});
