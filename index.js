var chalk = require('chalk');

var Dog = require('./Dog');
var Cat = require('./Cat');
var mic = new Dog('Tom');

var jerry = new Cat();


//mic.sayHi();
mic.eat(jerry);
console.log(mic);