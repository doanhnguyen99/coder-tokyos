function People(){
    this.dead = false;
}

People.prototype.die = function(){
    this.dead = true;
}

module.exports = People;