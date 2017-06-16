//module pattern
var repo = function() {

    var get = function(id) {
        console.log('getting task ' + id);
        return {
            name: 'new task from db::' + id
        }
    };
    
    var save = function(task) {
        console.log('saving task to db ' + task.name);
    };

    return {
        get: get,
        save: save
    }
}


module.exports = repo();