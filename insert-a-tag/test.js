const insertATag = require('./index');

describe('insert-a-tag', () => {
	it('should work without tags', () => {
		expect(insertATag('hello', [])).toBe('hello');
	});

	it('should add one tag', () => {
		expect(insertATag('hello', [[1, 3, 'i']])).toBe('h<i>ell</i>o');
	});

	it('should work with one char tag', () => {
		expect(insertATag('hello', [[4, 4, 'b']])).toBe('hell<b>o</b>');
	});

	it('should add several tags with correct order', () => {
		expect(
			insertATag('hello', [
				[4, 4, 'b'],
				[1, 3, 'i'],
			]),
		).toBe('h<i>ell</i><b>o</b>');
	});

	it('should work with intersect range tags', () => {
		expect(
			insertATag('hello', [
				[0, 2, 'b'],
				[1, 3, 'i'],
			]),
		).toBe('<b>h<i>el</i></b><i>l</i>o');
	});

	it('should work when ends several tags on 1 char', () => {
		expect(
			insertATag('hello', [
				[0, 2, 'b'],
				[1, 2, 'i'],
			]),
		).toBe('<b>h<i>el</i></b>lo');
	});

	it('should work when several tags starts at 1 char and good sorting', () => {
		expect(
			insertATag('hello', [
				[0, 2, 'b'],
				[0, 4, 'i'],
			]),
		).toBe('<i><b>hel</b>lo</i>');
	});

	it('should split tags when intersects', () => {
		expect(
			insertATag('hello', [
				[0, 3, 'b'],
				[1, 4, 'i'],
			]),
		).toBe('<b>h<i>ell</i></b><i>o</i>');
	});

	it('should work when several tags starts and ends at the same chars', () => {
		expect(
			insertATag('hello', [
				[0, 2, 'b'],
				[0, 2, 'i'],
			]),
		).toBe('<b><i>hel</i></b>lo');
	});

	it(`should work with Tolya's example`, () => {
		expect(
			insertATag('Hello, World!', [
				[0, 2, 'i'],
				[7, 11, 'u'],
				[4, 9, 'b'],
			]),
		).toBe('<i>Hel</i>l<b>o, <u>Wor</u></b><u>ld</u>!');
	});
});
