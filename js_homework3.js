let sum = 0;
let number = 1;

do {
  if (number % 3 !== 0) {
    sum += number;
  }
  number++;
} while (number <= 100);
console.log("Сума чисел від 1 до 100, що не кратні 3: " + sum);
