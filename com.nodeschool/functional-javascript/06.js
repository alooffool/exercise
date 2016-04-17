function countWords(inputWords) {
	// SOLUTION GOES HERE
	return inputWords.reduce(function(o, word) {
		var count = (o.hasOwnProperty(word)) ? o[word] : 0;
		o[word] = count + 1;
		return o;
	}, {});
}

module.exports = countWords
