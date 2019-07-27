var chalk = require('chalk');

function Dog(name)
{
    this.name = name;
    this.stomatch = [];
}

Dog.prototype.eat = function(cat)
{
    this.stomatch.push(cat);
}

Dog.prototype.sayHi = function()
{
    console.log('Hi! My name is Doanh' + chalk.blue(this.name));
}

module.exports = Dog;