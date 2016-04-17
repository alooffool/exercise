function getShortMessages(messages) {
	// SOLUTION GOES HERE
	return messages
		.filter(function lessThan50(x) {
			return x.message.length < 50;
		})
		.map(function message(x) {
			return x.message
		})
}

module.exports = getShortMessages
