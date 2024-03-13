console.log("number" + 3 + 3);
//відбувається конкатенація. Результат --> number33

console.log(null + 3);
//null це нуль, обчислення та результат --> 0+3=3

console.log(5 && "qwerty");
//qwerty --> обидва значення true, тому повертається значення яке зправа

console.log(+"40" + +"2" + "hillel");
//  конкатенація --> 402hillel

console.log("10" - 5 === 6);
/* 1)string "10" буде переведено в number --> 10-5=5
    2) 5 === 6 у порівнянні на рівність отримуємо false, бо 5 не дорівнює 6
 */

console.log(true + false);
// будуть переведені в number 1 та 0 відповідно, --> 1+0=1

console.log("4px" - 3);
// результат NaN бо "4px" неможливо перевести у number --> NaN-3=NaN

console.log("4" - 3);
// "4" переведеться в number --> 4-3=1

console.log("6" + 3 ** 0);
// number 3 приводиться в степінь 0 = 1 і відбувається конкатенація = 61

console.log(12 / "6");
// 6 переведеться в number --> 12/6=2

console.log("10" + (5 === 6));
/* 1) (5 === 6) результат false, бо 5<6
2) "10"+false = конкатенація 10false
*/

console.log(null == "");
//false бо різні типи даних?, але я думала що буде true, бо нал=0 і пусте =0

console.log(3 ** (9 / 3));
// перша дія в дужках (9 / 3)=3; друга дія --> 3 в кубі = 27

console.log(!!"false" == !!"true");
//я думала має бути true, бо стрінг порівнюється зі стрінг

console.log(0 || ("0" && 1));
/* у прикладі не було дужок, але в мене pritier підказав:))
1) && має пріорітет, тому спершу "0" && 1 --> обидва є true тому повертається 
1, те що справа
2) 0 || 1 --> нуль є хибним, тому повертається той варіант, що true --> 1
 */

console.log((+null == false) < 1);
/* 1) +null == false --> 0==0 true 
true< 1 --> true - це 1, 1=1 тому буде false 
 */

console.log((false && true) || true);
/* && має пріорітет . повертає false, бо обидва операнди не є true.
друга дія - false|| true --> отримуємо true, бо при || повертає true, якщо
є хочаб 1 true
 */

console.log(false && (false || true));
//false || true --> повертає true -->  false &&true --> false, бо операнди не рівні

console.log((+null == false) < 1 ** 5);
/* (+null == false) конвертує в number --> +null=0, false=0 --> 0==0 --> true
 1 ** 5 --> 1 в п'ятій степені буде 1
 true<1 --> false , бо true=1, відповідно 1<1 false
*/

console.log(null == null);

let age = 11;
let a = 11;
if (age == 16 || a == 17) {
  console.log("U can take part time job");
}
