function myIsNaN(value) {
  return value != value;
}

let a = "string" / 10;

console.log(myIsNaN(1));
console.log(myIsNaN({}));
console.log(myIsNaN([]));
console.log(myIsNaN(NaN));
console.log(myIsNaN(a));
console.log(myIsNaN("cat"), ">");
