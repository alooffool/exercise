function processData(input) {
    //Enter your code here
    "use strict"
	let region = function(row, col) {
	    if (row >= 0 && row < rows && col >= 0 && col < cols) {
	        let cell = matrix[row][col];
	        matrix[row][col] = "visited";
			if (cell === 1) {
	            return 1 +
					region(row-1, col-1) +
					region(row  , col-1) +
					region(row+1, col-1) +
					region(row-1, col  ) +
					region(row+1, col  ) +
					region(row-1, col+1) +
					region(row  , col+1) +
					region(row+1, col+1);
			}
	    }
        return 0;
	}

    let lines = input.split("\n");
    const rows = parseInt(lines[0]);
    const cols = parseInt(lines[1]);
    let matrix = [];
    let largest = 0;

    for (let i=2; i < rows+2; i++) {
        matrix.push(lines[i].split(" ").map(Number));
    }

	for (let row=0; row < rows; row++) {
		for (let col=0; col < cols; col++) {
			var size = region(row, col);
			if (size > largest) {
				largest = size;
			}
		}
	}

	console.log(largest);
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
