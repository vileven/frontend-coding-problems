/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
	let path = '';

	if (message.length === 0 || message[0].length === 0) {
		return path;
	}

	const rows = message.length;
	const cols = message[0].length;

	const directions = {
		down: [1, 1],
		up: [-1, 1],
	};

	let direction = directions.down;

	const changeDirection = () => {
		direction =
			direction === directions.down ? directions.up : directions.down;
	};

	const nextPoint = ([x, y]) => {
		const [xDiff, yDiff] = direction;

		x += xDiff;
		y += yDiff;

		return [x, y];
	};

	const isValidPoint = ([x, y]) => {
		return x >= 0 && x < rows && y >= 0 && y < cols;
	};

	let point = [0, 0];
	while (true) {
		const [x, y] = point;
		path += message[x][y];

		let nextPosPoint = nextPoint(point);
		if (isValidPoint(nextPosPoint)) {
			point = nextPosPoint;
			continue;
		}

		changeDirection();
		nextPosPoint = nextPoint(point);
		if (isValidPoint(nextPosPoint)) {
			point = nextPosPoint;
			continue;
		}

		return path;
	}
}

module.exports = decode;
