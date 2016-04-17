'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  fulfill("FULFILLED!");
});

// Your solution here
promise.then(function(val) {
	console.log(val);
});

setTimeout(promise.fulfill, 300);
