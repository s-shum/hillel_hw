function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function checkProbabilityTheory(count) {
  const listNumbers = [];
  for (let i = 0; i < count; i++) {
    listNumbers.push(randomInteger(100, 1000));
  }

  let allEven = 0;
  let allOdd = 0;

  for (const number of listNumbers) {
    if (number % 2 === 0) {
      allEven += 1;
    } else {
      allOdd += 1;
    }
  }
  console.log(listNumbers);
  const evenPercent = (allEven / count) * 100;
  const oddPercent = (allOdd / count) * 100;

  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${allEven}`);
  console.log(`Не парних чисел: ${allOdd}`);
  console.log(
    `Відсоток парних до не парних: ${evenPercent.toFixed(
      2
    )}% - ${oddPercent.toFixed(2)}%`
  );
}

checkProbabilityTheory(10);
