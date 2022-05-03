const sum = require('./index');

describe('create-a-sum', () => {
	it('should work 1', () => {
		const sum1 = sum(1);
		expect(sum1(2) == 3).toBe(true);
		expect(sum1(3) == 4).toBe(true);
	});

	it('should work 2', () => {
		expect(sum(1)(2)(3) == 6).toBe(true);
		expect(sum(5)(-1)(2) == 6).toBe(true);
	});
});
