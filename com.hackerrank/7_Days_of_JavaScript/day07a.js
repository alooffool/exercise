function processData(input) {
    //Enter your code here
    "use strict"
    const COLS = 14;
    const ROWS = 14;
    let output = "";

    for (let r=0; r < ROWS; r++) {
        for (let c=0; c < COLS; c++) {
            output += (c % 2 === 0) ? "\u2571" : "\u2572";
        }
        output += "\n";
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
