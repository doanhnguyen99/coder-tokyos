function Mouse(name)
{
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = function(){
    this.dead = true;
}

module.exports = Mouse;

function convertAnimals()
{
    var name = 'ulis';
    var object = new Mouse(name);
    if(object instanceof  Mouse) console.log('true');

}