function processData(input) {
    //Enter your code here
    "use strict"
    let lines = input.split("\n");
    let money = lines[0].split(" ")[1];
    let ascendingPrices = lines[1].split(" ").map(Number).sort(function(a, b){return a-b});
    let toysPurchased = 0;

    while (money > 0 && ascendingPrices.length > 0) {
        money -= ascendingPrices.shift();
        if (money > 0) {
            toysPurchased += 1;
        }
    }

    console.log(toysPurchased);
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
