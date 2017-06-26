'use sctrict';


//factory pattern
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: 'car',
            color: 'yellow',
            doors: 6 } );
 
// Test to confirm our car was created using the vehicleClass/prototype Car
 
// Outputs: true
console.log( car instanceof Car );
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );


function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'new';
    this.color = options.color || 'white';
}


function Truck(options) {
    this.doors = options.doors || 2;
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || '24';
}

function VehicleFactory() {
    //define a default 
    VehicleFactory.prototype.vehicleClass = Car;
    VehicleFactory.prototype.createVehicle = function(options) {
        switch (options.vehicleType) {
            case 'car':
                {
                    this.vehicleClass = Car;
                    break;
                }
            case 'truck':
                {
                    this.vehicleClass = Truck;
                    break;
                }
        }
        // return new this.vehicleClass(options);

    }
}
// var RepoFactory = require('./repoFactory');

// var myFactory = new RepoFactory();


// var object1 = myFactory.getRepo('user');

// object1.get();




// var Task = require('./task');

// var task = new Task({name:'first task'});
// task.save();
// task.complete();


// var Task = require('./task')
// var Repo = require('./taskRepository');


// var task1 = new Task(Repo.get(1));
// var task2 = new Task({name:'some module task'});

// task1.complete();
// task1.save();


// console.log('START');
// var s = '19970101';

// convertSimpleDate(s);
// console.log(convertSimpleDate(s));

// var d = new Date(s);
// console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh');
// console.log(d.toDateString());

function convertSimpleDate(str) {
    if (str.length != 8) {
        console.log('WRONG STRING');
        return '';
    } else {
        console.log('got it right!!');

        return str.replace(/(\d{4})(\d{2})(\d{2})/, '$1/$2/$3');
    }
}

// var Task = require('./script')
// var TaskClass = require('./script')
// var Repo = require('./taskRepository')




// //creating copies of yje object 
// var myTask1 = new Task('TASK::1');
// var myTask2 = new Task('TASK::2');
// var myTask3 = new Task('TASK::3');
// var myTask4 = new Task('TASK::4');

// //using ES6

// var myES6Task = new TaskClass('ES6Task');

// myTask1.complete();
// myTask1.save();
// myTask2.complete();
// myTask2.save();
// myTask3.complete();
// myTask3.save();

// myES6Task.complete();
// myES6Task.save();