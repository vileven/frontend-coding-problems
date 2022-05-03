/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} target
 */
const findCorrespondingNode = (rootA, rootB, target) => {
	const aWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
	const bWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);

	while (aWalker.currentNode !== target) {
		aWalker.nextNode();
		bWalker.nextNode();
	}

	return bWalker.currentNode;
};
