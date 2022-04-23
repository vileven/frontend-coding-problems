const curry = require('./index.js');

describe('implement-curry', () => {
	const join = (a, b, c) => {
		return `${a}_${b}_${c}`;
	};

	const curriedJoin = curry(join);

	it('should work as usual', () => {
		expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
	});

	it('should work as curry 1', () => {
		expect(curriedJoin(1)(2, 3)).toBe('1_2_3');
	});

	it('should work as curry 2', () => {
		expect(curriedJoin(1, 2)(3)).toBe('1_2_3');
	});

	it('should work as curry 3', () => {
		expect(curriedJoin(1)(2)(3)).toBe('1_2_3');
	});
});
