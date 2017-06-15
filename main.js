'use sctrict';

console.log('START');
var s = '19970101';

convertSimpleDate(s);
console.log(convertSimpleDate(s));

// var d = new Date(s);
// console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh');
// console.log(d.toDateString());

function convertSimpleDate(str) {
    if (str.length != 8) {
    	console.log('WRONG STRING');
        return '';
    } else {
    	console.log('got it right!!');

        return str.replace(/(\d{4})(\d{2})(\d{2})/,'$1/$2/$3');
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