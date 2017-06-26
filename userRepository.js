
var User = function() {
    this.name = 'defaultName';
}
User.prototype.get = function() {
    return this.name;
}


module.exports = User;