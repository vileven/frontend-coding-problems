/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
	if ('$push' in command) {
		data.push(...command['$push']);
		return data;
	}

	if ('$set' in command) {
		return command['$set'];
	}

	if ('$merge' in command) {
		if (typeof data !== 'object') {
			throw 'merge can work only with objects';
		}

		return {...data, ...command['$merge']};
	}

	if ('$apply' in command) {
		return command['$apply'](data);
	}

	Object.entries(command).forEach(([key, value]) => {
		data[key] = update(data[key], value);
	});

	return data;
}

module.exports = update;
