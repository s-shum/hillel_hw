let userInput = prompt("Скільки тобі років?");

if (userInput >= 0) {
  let years = parseInt(userInput);
  let output;

  let lastDigit = years % 10;
  let lastTwoDigits = years % 100;

  if (
    (lastTwoDigits >= 11 && lastTwoDigits <= 19) ||
    lastDigit === 0 ||
    (lastDigit >= 5 && lastDigit <= 9)
  ) {
    output = years + " років";
  } else if (lastDigit === 1) {
    output = years + " рік";
  } else {
    output = years + " роки";
  }

  console.log(output);
} else {
  console.log("Будь ласка, введіть додатнє число.");
}
