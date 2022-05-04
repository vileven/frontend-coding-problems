const decode = require('./index');

describe('decode-message', () => {
	it('should work with test case 1', () => {
		expect(
			decode([
				['I', 'B', 'C', 'A', 'L', 'K', 'A'],
				['D', 'R', 'F', 'C', 'A', 'E', 'A'],
				['G', 'H', 'O', 'E', 'L', 'A', 'D'],
			]),
		).toBe('IROCLED');
	});
});
