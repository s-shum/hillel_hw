/* Task - 1
Виберіть підходящі імена для змінних та створіть їх в коді.
        1) Змінна для зберігання дати створеного файла.
        2) Змінна для зберігання ім'я файлу. 
        3) Змінна для зберігання кількості помилок. */

let fileCreatedDate;
let fileName;
let numberOfErrors;

/* Task - 2
        1) Об'явіть дві змінні: login и name
        2) Змінній name в якості значення привласніть своє ім'я
        3) Скопіюйте значення із змінної name в login
        4) Виведіть в консолі  значення змінної login */

let login;
const myName = "Sofiia";
login = myName;
console.log(login);

/* Task - 3
        Створіть 3 змінні в одному рядку з різними значеннями */

let minAge = 20,
  myAge = 27,
  maxAge = 99;

/* Task - 4
        Створіть змінну з іменем myUndefined і встановіть її значення рівним undefined без використання слова "undefined" 
        %%% https://www.tiktok.com/@devslopes/video/7150509431485107498 %%%
        */
let n;
let myUndefined = n;
console.log(myUndefined);

/* Task - 5
        Вам потрібно записати рядок "I'm lovin' it!" у змінну resultLine.

        - Значення змінних line1, line2, line3 не змінювати.
*/

let line1 = "Lovin";
let line2 = "It!";
let line3 = "I'm";
let resultLine = line3 + " " + line1 + " " + line2; //change this line
console.log(resultLine);

/* Task - 6
        Вам потрібно записати рядок "70" у змінну digits.
        Використовуйте змінні x, y, z, порожній рядок та конкатенацію рядків.

        - Значення змінних x, y, z не змінюйте.
*/

let x = 3;
let y = 4;
let z = 0;

let digits = String(x + y) + z;
console.log(digits);

/* Task - 7
        Вам потрібно записати число 100500 у змінну hugeAmount.
        Використовуйте змінні bigAmount, greatAmount та перетворення рядка у число.
        Оголосити та ініціалізувати hugeAmount однією командою.

        - Не змінюйте значення змінних bigAmount і greatAmount.
        - Використовуйте bigAmount, greatAmount та метод Integer() для ініціалізації змінної hugeAmount.
*/

let bigAmount = "500";
let greatAmount = "100000";

let hugeAmount = Number(bigAmount) + Number(greatAmount); //change this line

console.log(hugeAmount);

/* Task - 8
        Змінити код так, щоб замість значень рядків виводилась довжина кожного рядка.


        - Не змінюйте значення змінної emptyString.
        - Для трьох рядків, переданих у метод console.log, слід викликати метод length.
        - Програма повинна вивести три числа, кожне з нового рядка.
*/

let emptyString = "";

console.log(emptyString.length);
console.log("Think Different".length);
console.log(emptyString.length + 2 + 2 + "22");

/* Task - 9
        На екран виводиться 4 рядки. Усі вони є яскравим прикладом зловживання великими літерами.
        Внесіть зміни у код, щоб усі літери у цих рядках були маленькими.


        - Змінні title, degree та career не змінюйте.
        - Для чотирьох рядків, переданих у метод console.log, слід викликати метод toLowerCase.
*/

let title = "Senior Lead Principal Data Analyst";
let degree =
  "In college, I Majored in Economics Science and Minored in Musician Studies.";
let career =
  "Data Scientist With 3+ Years of Experience in Big Data Analytics.";

console.log("RESUME".toLowerCase());
console.log("TITLE: ".toLowerCase() + title);
console.log("DEGREE: ".toLowerCase() + degree);
console.log("CAREER: ".toLowerCase() + career);

/* Task - 10
        На екран виводиться 3 рядки. Усі вони є яскравим прикладом зловживання великими літерами.
        Внесіть зміни у код, щоб усі літери у цих рядках були великими.

        - Значення змінних caps та usa не змінюйте.
        - Викличте метод toUpperCase для трьох рядків, переданих методу console.log.
*/

let caps = "if I type in caps ";
let fbi = "фбр";

console.log(fbi.toUpperCase());
console.log("Гекльберрі Фінн".toUpperCase());
console.log(caps.toUpperCase() + "they know I mean business".toUpperCase());

/* Task - 11
        Додайте операції множення, ділення та віднімання.
        Відображати результати двома способами: за допомогою конкатенації та за допомогою шаблонних рядків.
*/

/*  let inputX = 2;
        let inputY = 3;

        let x = Number(inputX);
        let y = Number(inputY);

        let sum = x + y;
        let sum = inputX + inputY;

        console.log(`${x} + ${y} = ${sum}`); */

let inputX = 2;
let inputY = 3;

let xx = Number(inputX);
let yy = Number(inputY);

let sum = inputX / inputY;
let sum2 = inputX * inputY;
console.log(`${xx} / ${yy} = ` + sum);
console.log(`${xx} * ${yy} = ` + sum);
console.log(String(xx) + " - " + String(yy) + ` = ${xx - yy}`);

/* Task - 12
        Ініціалізуйте змінну message - значення повинно бути створене за домпомогою шаблонного рядка та за допомогою конкотинації
        Рядкове значення має бути створене на основі значення змінних name, age, company, position, наприклад:
        Привіт, мене звати Максим. Мені 29 років. Я працюю на посаді QA в компанії Apple.
*/

/*  let name = "Максим";
        let age = 29;
        let company = "Apple";
        let position = "QA;

        let message = "";
        console.log(message); */

let name = "Максим";
let age = 29;
let company = "Apple";
let position = "QA";

let message =
  "Привіт, мене звати " +
  name +
  `. Мені ${age} років. ` +
  "Я працюю на посаді " +
  position +
  ` в компанії ${company}.`;
console.log(message);
