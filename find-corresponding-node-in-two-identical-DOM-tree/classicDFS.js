/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} target
 */
const findCorrespondingNode = (rootA, rootB, target) => {
	if (rootA === null) {
		return null;
	}

	if (rootA === target) {
		return rootB;
	}

	let result = null;
	for (let i = 0; i < rootA.children.length; i++) {
		const childA = rootA.children[i];
		const childB = rootB.children[i];

		result ||= findCorrespondingNode(childA, childB, target);
	}

	return result;
};
