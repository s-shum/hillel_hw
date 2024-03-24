function pad(str, char, length, isLeft) {
  let result = str;
  const diffLength = length - str.length;
  if (diffLength > 0) {
    const padding = char.repeat(diffLength);
    if (isLeft) {
      result = padding + result;
    } else {
      result = result + padding;
    }
  }
  return result;
}
console.log(pad("hello", "+", 10, true));
console.log(pad("hello", "*", 7, false));
console.log(pad("python", "#", 15, true));
