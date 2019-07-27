var chalk = require('chalk');

var Dog = require('./Dog');
var Cat = require('./Cat');
var mic = new Dog('Tom');

var jerry = new Cat();


//mic.sayHi();
mic.eat(jerry);
console.log(mic);

mic.prototype.getData = function()
{
    this.name = 'ahihi';
}

// Comment Code