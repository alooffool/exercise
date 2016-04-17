function processData(input) {
    //Enter your code here
    "use strict"
    const TREE_HEIGHT = 9;

	let getRow = function (n, height, char) {
		let row = "";

	    for (let c=1; c < height; c++) {
            row += (c < height - n) ? " " : char + char;
	    }

		return row + char;
	}

    let output = getRow(0, TREE_HEIGHT, "*");

    for (let r=0; r < TREE_HEIGHT; r++) {
		output += "\n" + getRow(r, TREE_HEIGHT, "0");
    }

    console.log(output);
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
