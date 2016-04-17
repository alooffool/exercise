let getArgs = s => Array.prototype.slice.call(s);
let getDigits = n => n.toString().split('');
let removeChar = (s, c) => s.replace(c, '');
let removeDigits = (s, n) => getDigits(n).reduce(removeChar, s);
function unusedDigits() {
  return getArgs(arguments).reduce(removeDigits, '0123456789');
}
