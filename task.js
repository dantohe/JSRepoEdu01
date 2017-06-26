var Repo = require('./taskRepository');

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
    this.repo = Repo.get(this.name);
    
    console.log('initiated task with name: '+data.name);
}

Task.prototype.complete = function() {
    console.log('completing task ...');

    this.completed = true;
};

Task.prototype.save = function() {
    console.log('Saving task ...');
    Repo.save(this);
};

module.exports =Task;