// 1
// let age = 10;
// if (age >= 14 && age <= 90) {
//   alert(“Рабочий возраст“);
// };
// 2
// let age = 13;
// if (age < 14 || age > 90) {
//   alert(“Не рабочий возраст“);
// };
// let age = 91;
// if (!(age >= 14 && age <= 90)) {
//   alert(“Не рабочий возраст“);
// };

// 3
// result = (a + b < 4) ? “Мало” : “Много“;
// 4
// let message = (login == ‘Сотрудник‘) ? ‘Привет’ :
//   (login == ‘Директор‘) ? ‘Здравствуйте’ :
//   (login == ‘’) ? ‘Нет логина‘:
//   ’ ‘;
// 5
// let log = prompt(“Кто там?“);
// if (log == “Админ“) {
//   let pass = prompt(“Пароль“);
//   if (pass = “Я главный“) {
//     alert(“Здравствуйте господин.“);
//   } else if (log == null || log == “”) {
//   alert(“Отменено“);
//   } else {
//     alert(“Неверный пароль“);
//   }
// } else if (log == null || log == “”) {
//   alert(“Отменено“);
// } else {
//   alert(“Я Вас не знаю и не хочу знать. Уходите.“);
// };
// 6
// let browser = "Firefox";
// if (browser == "Edge") {
//    console.log("You've got the Edge!");
// } else if (browser == "Chrome" || "Firefox" || "Safari" || "Opera") {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// };
// 7
// let number = prompt("Введите число между 0 и 3");
// switch (number) {
//   case ("0"):
//     console.log("Вы ввели число 0");
//     break;
//   case ("1"):
//     console.log("Вы ввели число 1");
//     break;
//   case ("2"||"3"):
//     console.log("Вы ввели число 2, а может и 3");
//     break;    
//   default:
//     console.log("Не та цифра");
// };
// 8
// for(let i = 2; i <= 10; i++) {
//    if (i % 2 == 0) {
//   console.log(i);
//    };
// };
// 9
// let i = 0;
// while(i < 3) {
//   console.log("number " + i + "!");
//   i++;
// };
// 10
// let num;
// do {
// num = prompt("Введите число более 100");
// } while (num<100);
// 11
// let numb = 20;
// step:
// for (let i = 2; i < numb; i++) {
//   for (let a =2; a < i; a++) {
//     if(i % a == 0) continue step
//   }
//   console.log(i);
// }
// 12
// let day = 22;
// if (day <= 10){
//     console.log('Первая декада');
// } else if(day > 10 && day <=20 ){
//     console.log('Вторая декада');
// } else if(day > 20 && day <=31 ){
//     console.log('Третья декада');
// } else{
//     console.log('Неверное число');
// };
// 13
// let month = 13;
// if ( month <= 2 || month == 12 ){
//     console.log('Это зимний месяц');
// } else if ( month <=5 && month >=3 ){
//     console.log('Это весенний месяц');
// } else if (month >=6 && month <=8 ){
//     console.log('Это летний месяц');
// } else if (month >=9 && month <=11 ){
//     console.log('Это осенний месяц');
// } else {
//     console.log('Неправильный месяц');
// };
//
// 14
// let min = 46;
// if ( min >= 0 && min <=15 ){
//     console.log('Первая четверть');
// } else if ( min >= 16 && min <=30 ){
//     console.log('Вторая четверть');
// } else if ( min >= 31 && min <=45 ){
//     console.log('Третья четверть');
// } else if ( min >= 46 && min <=59 ){
//     console.log('Четвертая четверть');
// } else {
//     console.log('Неправильное число');
// }
// 15
// let age = 15;
// function checkAge(age) {
//     return (age >= 18) ? console.log('Вы совершеннолетний') : console.log('Вы не совершеннолетний');
// };
// checkAge(81);
