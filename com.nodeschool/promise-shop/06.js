var promise = Promise.resolve('SECRET VALUE');

promise.then(function(message) {
    console.log('THERE IS A RESOLUTION!!!');
    console.log(message);
});

var lie = Promise.reject(new Error('SECRET VALUE'));

lie.catch(function(error) {
    console.error('THERE IS AN ERROR!!!');
    console.log(error.message);
});
