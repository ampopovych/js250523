// Цикл for!!!!!!!!!!!!!!!!!!!!!
// let i;
// for (i=30; i<12; i-=2) {
//     console.log(i);
// }
// console.log(`kinec`);

// // Задача 1 на for
// const employes=7;
// let totatlSalary=0;
// const minSalary=4500;
// const maxSalary=5000;
// for (let i=1; i<employes; i+=1) {
//     // console.log(i);
//     const salary = Math.round(Math.random()*(maxSalary-minSalary)+minSalary);
//     console.log(`Zarobitna palta ${i} robitnyka stanovyty ${salary}`);
//     totatlSalary +=salary;
// }
// console.log(`Vsyogo zarplata stanovyt ${totatlSalary}`);

// // Задача 2 для for
// const min = Number(prompt(`Vvedit minimalne znachennya`));
// const max = Number(prompt(`Vvedit maxymalne znachennya`));
// let total = 0;
// for (let i=min; i<max; i+=1) {
//     // console.log(i);
//     if (i%2===0){
//         console.log(`Parne chyslo ${i}`);
//        total +=i;
//     }
// }
// console.log(`Vsyoho ${total}`);


// // Задача 2 для for з виводом парних і не парних
// const min = Number(prompt(`Vvedit minimalne znachennya`));
// const max = Number(prompt(`Vvedit maxymalne znachennya`));
// let totalParni = 0;
// let totalNeparni = 0;
// for (let i=min; i<max; i+=1) {
//     // console.log(i);
//     if (i%2!==0){
//         console.log(`Ne parne chyslo ${i}`);
//         totalNeparni+=i;
       
//     }
//     else {console.log(`Parne chyslo ${i}`);
//        totalParni +=i;}
// }
// console.log(`Vsyoho ${totalNeparni}`);
// console.log(`Vsyoho ${totalParni}`);



// // Задача 2 для for з командою continue
// const min = Number(prompt(`Vvedit minimalne znachennya`));
// const max = Number(prompt(`Vvedit maxymalne znachennya`));
// let totalParni = 0;

// for (let i=min; i<max; i+=1) {
//     // console.log(i);
//     if (i%2!==0){
//         // console.log(`Ne parne chyslo ${i}`);
//         continue;
       
//     }
//    console.log(`Parne chyslo ${i}`);
//        totalParni +=i;
// }

// console.log(`Suma parnych ${totalParni}`);

// Задача на if
let balance = Number(prompt(`Skilky majesh €`));
const payment = Number(prompt(`Vvedy sumu na jaku ty kupyv`));
console.log(`Zahalna suma koshtiv, scho ty majesh stanovyt ${balance} € a chochesh profitkaty ${payment}`);
if (payment <= balance) {
    balance -= payment; 
    console.log(`v tebe zalyshylosya ne mnoho ne malo, a ${balance} €`);
} else {
    console.log(`nema v tebe babulyosiv`);
}
console.log(`Operaciya zavershena`);