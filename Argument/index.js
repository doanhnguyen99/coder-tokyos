// Argument

// const obj = {
//     0: 'Doanh',
//     1: 'Abc',
//     2: 'UET',
//     3: 'Ulis',
//     length: 4
// };

// for(let i = 0; i < obj.length; i++){
//     console.log(obj[i]);
// }

// function sum(){
//     const numbers = Array.from(arguments);
//     return numbers.reduce(function(arg1, arg2){
//         return arg1 + arg2;
//     }, 0);
// }

// console.log(sum(1, 2, 3, 4, 10));

// Default Parameter

// function greeting(name){
//     console.log(`Hi, ${name}`);
// }

// greeting('Tom Cruise');

function greeting(name = 'Doanh'){
    // if(name === undefined) name = 'Doanh';
    console.log(`Hi, ${name}`);
}

greeting();