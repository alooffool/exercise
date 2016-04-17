let getArgs = s => Array.prototype.slice.call(s);
let getDigits = n => n.toString().split('');
let removeChar = (s, c) => s.replace(c, '');
let removeDigits = (s, n) => getDigits(n).reduce(removeChar, s);
function unusedDigits() {
  return getArgs(arguments).reduce(removeDigits, '0123456789');
}

function unusedDigits_01() {
  return Array.prototype.slice.call(arguments)
  	.reduce((unused, arg) =>
      arg.toString().split('')
        .reduce((unused, digit) => unused.replace(digit, ''), unused)
    , '0123456789');
}

function unusedDigits_00(){
  // ...
  var unused = '0123456789';
  var args = Array.prototype.slice.call(arguments);
  // var remove = (s, target) => s.replace(target, '');
  // var isEmpty;
  //
  // for (var i=0; i < args.length; i++) {
  //   var digits = args[i].toString().split('');
  //   for (var j=0; j < digits.length; j++) {
  //     console.log(unused, digits[j]);
  //   	unused = remove(unused, digits[j]);
  //     isEmpty = unused.length === 0;
  //     if (isEmpty) break;
  //   }
  //   if (isEmpty) break;
  // }

  // return args.reduce(function(unused, arg) {
  //   return arg
  //     .toString()
  //     .split('')
  //     .reduce(function(unused, digit) {
  //       return unused.replace(digit, '');
  //     }, unused);
  // }, unused);
  return args.reduce((unused, arg) =>
    arg
      .toString()
      .split('')
      .reduce((unused, digit) => unused.replace(digit, ''), unused)
    , unused);


/*
  console.log(args);
  args.forEach((arg) => {
  	console.log(arg, this.unused);
  	arg.toString().split('').forEach((digit) => {
      console.log('  '+digit);
      console.log(unused);
      remove(unused, digit);
//    	unused.replace(digit, '');
    }, this);
  });
*/
  // return unused;
}

// Start out with a string of digits
// Grab the input arguments one by one.
// One character at a time,
//   if this character is in the string, replace it with ''.
// if string.length === 0, stop.
// return string
