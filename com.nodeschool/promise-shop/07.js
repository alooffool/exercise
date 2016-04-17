
var onFulfilled = function(message) {
    console.log(message);
}

// var firstPromise = first();
//
// var secondPromise = firstPromise.then(function (val) {
//     return second(val);
// });
//
// secondPromise.then(onFulfilled);

first().then(second).then(onFulfilled);
