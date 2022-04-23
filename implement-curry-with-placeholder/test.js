const curry = require('./index.js');

describe('implement-curry-with-placeholder', () => {
	const join = (a, b, c) => {
		return `${a}_${b}_${c}`;
	};

	const curriedJoin = curry(join);
	const _ = curry.placeholder;

	it('should work as usual', () => {
		expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
	});

	it('should work as curry 1', () => {
		expect(curriedJoin(_, 2)(1, 3)).toBe('1_2_3');
	});

	it('should work as curry 2', () => {
		expect(curriedJoin(_, _, _)(1)(_, 3)(2)).toBe('1_2_3');
	});

	it('should work as curry 3', () => {
		expect(curriedJoin(1)(2)(3)).toBe('1_2_3');
	});

	it('should work as curry 4', () => {
		expect(curriedJoin(1)(2, 3)).toBe('1_2_3');
	});

	it('should work as curry 5', () => {
		expect(curriedJoin(1, 2)(3)).toBe('1_2_3');
	});
});
