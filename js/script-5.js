
// const age = 10;
// const totalPrice =200.34;
// const userName ='Andriy';
// const message = 'Vitajemo';
// const isOpen = true;
// const shouldConfirm = false;
// // parseInt
// let elementWidth = "45f6.45px";
// const width = Number.parseInt(elementWidth);
// console.log('element width',width);
// // parseFloat
// let elementHeight = "856.45px";
// const height = Number.parseFloat(elementHeight);
// console.log('element height',height);
// // toFixed
// let salary = 299.8948489;
// console.log('your salary',salary.toFixed(3));
// salary = Number(salary.toFixed(3));
// console.log('your salary',salary);
// // Приведення до числа
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number('125dgget'));
// console.log(Number(65488));
// Math
// console.log(Math);
// const base=4;
// const power=3;
// console.log(Math.pow(base, power));
// console.log(Math.min(base, power));
// console.log(Math.abs(base, power));
// console.log(Math.acos(base));
// // console.log(Math.pow(base, power)); i console.log(base**power);ідентичні
// console.log(base**power);

// Потрібно написати скрипт, в якому компютер просить користувача ввести число і піднесення в степінь.
// 1. Попросити користувача ввести число і зберегти в змінній
// 2. Попросити користувача ввести значення ступеню і зберегти в змінній
// 3. Вивести на екран результат
let base=Number(prompt('Vvedit chyslo'));


console.log(base);
let stepin=Number(prompt('Vvedit stepin'));
console.log(base);
const result=base**stepin;
console.log(result);
alert(result);
