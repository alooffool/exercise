// var attachTitle = function(s) {
function attachTitle(s) {
    return "DR. " + s;
};

Promise.resolve("MANHATTAN")
    .then(attachTitle)
    .then(console.log);
