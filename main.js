'use sctrict';
var Task = require('./script')
var TaskClass = require('./script')


//creating copies of yje object 
var myTask1 = new Task('TASK::1');
var myTask2 = new Task('TASK::2');
var myTask3 = new Task('TASK::3');
var myTask4 = new Task('TASK::4');

//using ES6

var myES6Task = new TaskClass('ES6Task');

myTask1.complete();
myTask1.save();
myTask2.complete();
myTask2.save();
myTask3.complete();
myTask3.save();

myES6Task.complete();
myES6Task.save();