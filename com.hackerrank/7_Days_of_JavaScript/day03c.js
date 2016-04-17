function processData(myArray) {
    var largest = myArray[0];
    var second = largest;
    var current;

    for (var i = 1; i < myArray.length; i++) {
        current = myArray[i];
        if (current > second) {
            if (current > largest) {
                second = largest;
                largest = current;
            }
            else if (current < largest)
                // Don't allow current === largest here, to
                // avoid equal second and largest values.
                second = current;
        }
    }
    console.log(second);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
