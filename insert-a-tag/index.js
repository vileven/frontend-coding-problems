/**
 * sourceString - "Hello, World!"
 *
 * tags - [[0, 2,  "i"],[7, 11, "u"],[4, 9,  "b"]]
 */
function insertATag(sourceString, tags) {
	if (tags.length === 0) {
		return sourceString;
	}

	let result = '';

	// should sort tags by starting points
	tags.sort(([startA, endA], [startB, endB]) =>
		startA < startB ? -1 : startA === startB && endA > endB ? -1 : 1,
	);

	const openedTagsStack = [];

	const processOpen = i => {
		while (tags.length && tags[0][0] === i) {
			const tag = tags.shift();
			const [, , tagName] = tag;

			result += `<${tagName}>`;
			openedTagsStack.push(tag);
		}
	};

	const processClose = i => {
		const needToCloseIndex = openedTagsStack.findIndex(
			([, end]) => end === i,
		);

		if (needToCloseIndex === -1) {
			return;
		}

		// close every opened tag before end=i inclusively
		while (openedTagsStack.length > needToCloseIndex) {
			const tag = openedTagsStack.pop();
			const [, end, tagName] = tag;

			result += `</${tagName}>`;

			// if end for this tag is greater than i
			// add this tag to tags array from this index
			if (end > i) {
				tags.unshift([i, end, tagName]);
			}
		}

		// reopen tags if needed
		processOpen(i);
	};

	for (let i = 0; i < sourceString.length; i++) {
		const char = sourceString[i];

		processOpen(i);

		result += char;

		processClose(i);
	}

	return result;
}
// time O(N log N)
// space O (N)

module.exports = insertATag;
