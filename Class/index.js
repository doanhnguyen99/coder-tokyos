// function Mouse(name){
//     this.name = name;
// }

// Mouse.prototype.run = function(){
//     console.log(`${this.name} is running`);
// }

class Mouse{
    constructor(name){
        this.name = name;
    }

    run(){
        console.log(`${this.name} is running`);
    }
}

// const mouse = new Mouse('Mickey');
// mouse.run();

// Kế thừa



// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         console.log('Eating...');
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log('Flying...');
//     }
// }

// const bird = new Bird('Cu Gáy');
// bird.fly();

// Constructor Function

function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function(){
    console.log('Eating');
}

function Bird(name){
    Animal.apply(this, arguments);
}

Bird.prototype = new Animal();

var bird = new Bird('kiwi');
bird.eat();