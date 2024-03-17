function drawTriangle(height, symbol) {
  let str = symbol;
  for (let i = 0; i < height; i += 1) {
    console.log(str);
    str += symbol;
  }
}
drawTriangle(8, "+");

function secondDrawTriangle(height, symbol) {
  let str = symbol;
  do {
    console.log(str);
    str += symbol;
  } while (str.length - 1 < height);
}
secondDrawTriangle(5, "*");
