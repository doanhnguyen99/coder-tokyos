// Call

// function greeting(name, age){
//     console.log(`Hi, ${this.name} . I am ${this.age}`);
// }

// var person = {
//     name: 'Sakura',
//     age: 50
// }

// greeting.call(person, 'Doanh', 20);

// Apply

function sum()
{
    let result = Array.from(arguments);
    return result.reduce((a, b) => a + b, 0);
}

function average(){
    let x = sum.apply(null, arguments);
    return x / arguments.length;
}

console.log(average(1, 2, 3, 4, 5));