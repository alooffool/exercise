function processData(input) {
    //Enter your code here
	"use strict"
	let lines = input.split("\n");
	const words = parseInt(lines[0]);

	for (let word=1; word <= words; word++) {
		let asciiValues = lines[word].split("").map(char => char.charCodeAt(0));
		let head = 0;
		let tail = asciiValues.length - 1;
		let operations = 0;

		while (head < tail) {
			operations += Math.abs(asciiValues[head] - asciiValues[tail]);
			head++;
			tail--;
		}

		console.log(operations);
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
