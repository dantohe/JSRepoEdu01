"use sctrict";


/*
design patterns
*/
/*
creational design patterns
*/

/*
constructor pattern
*/


/*
the problem with this is that each object will create 
a copy of the save and completed function - this is ineficient
----the alternative - use a prototype 
that perform encapsulation of these methods 
*/

var Task = function(name) {
    this.name = name;
    this.completed = false;
}

//a more eficient way to create methods using the prototype approach

Task.prototype.complete = function() {
    console.log('completing  Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
};

module.exports =Task;

// myTask1.completed();
// myTask1.save();
// var myTask2 = new Task('my task 2');
// myTask2.completed();
// myTask2.save();





// function MyObject(arg1, arg2) {
//     this.arg1 = arg1;
//     this.arg2 = arg2;
//     this.toString = function() {
//         return this.arg1 + ' ' + this.arg2;
//     }
// }

// var newObject = new MyObject('argument_1', 'argument_2');
// console.log(newObject.toString());






// //creating objects
// //3 ways to create an object
// var task = {};
// var task = new Object();
// var task = Object.create(Object.prototype);

// task.title = 'MyTask';
// task.description = 'MyDescription';
// task.toString = function() {
//     return this.title + ' ' + this.description;
// }

// //define some property

// Object.defineProperty(task, 'name', {
//     value: 'my name',
//     writable: true,
//     enumerable: true,
//     configurable: true
// })

// Object.defineProperty(task, 'toString2', {
//     value: function() {
//         return this.title + ' ' + this.description;
//     },
//     writable: false,
//     enumerable: false,
//     configurable: true
// })

// //some simple inheritance
// var urgenTask = Object.create(task);


// console.log(task.toString());
// console.log(task.toString2());
// console.log(Object.keys(task));



/*
some oject creation stuff
*/

// //1
// var object1 = {};
// //2
// var object2 = Object.create(Object.prototype);
// //3
// var object3 = new Object();

// //dot notation
// object1.param = 'new value';
// console.log(object1.param);

// //braket notation
// object2['param']='some new value';
// console.log(object2.param);
// var xParam = 'lula'
// object3[xParam] ='miti';
// console.log(object3[xParam]);




/*Some basi inheritance and prototype in JS */

// function Cat(name, color) {
//     this.name = name
//     this.color = color
// }

// var f = new Cat("fluffy", "black");
// Cat.prototype.age = 3;

// display(Cat.prototype);
// display(f.__proto__);




/*
understanding prototypes
*/
//functions have a prototype object
// var myFunction = function(){
// ;
// }

// display(myFunction.prototype); //getting the empty oject

// an object dones't have a prototype
// var myObject ={name:"name",color:"thiscolor"};
// display(myObject.prototype);
// display(myObject.__proto__);

/*
creating a new functions for array using the prototype and defineProperty
*/
// var arr = ['a', 'b', 'c'];
// var last = arr[arr.length - 1];
// Object.defineProperty(Array.prototype, 'lst', {get: function(){
// 	return this[this.length-1];
// }})

// var brr=[1,2,3,4,5]
// display(arr.lst);
// display(brr.lst);


//objects do not have a prototype object


// function Cat(name, color) {
//     this.name = name,
//         this.color = color
// }

// var fluf = new Cat('milan', 'cucian')

// display('Object.getPrototypeOf(Cat) '+Object.getPrototypeOf(Cat));
// display('Object.getPrototypeOf(fluf)) '+Object.getPrototypeOf(fluf));

// display(typeof(Cat));
// display(typeof(fluf));


// display('Cat.prototype:' + Cat.prototype);
// display('Cat.__propto__:' + Cat.__proto__);

// display('fluf.prototype:' + fluf.prototype);
// display('fluf.__propto__:' + fluf.__proto__);

// display(' '+fluf.__propto__)
// display(fluf.prototype)
// display(arr.prototype)


// var cat = {
//     name: 'fluf',
//     color: 'orange',
//     typeOfCat: {
//         tail: "long",
//         ears: "shortEars"
//     },
//     getType: function() {
//         return this.typeOfCat.tail + ' ' + this.typeOfCat.ears;
//     },
//     fullAlternativeName: {
//         first: "defaultFirstName",
//         last: "defaultLastName"
//     },
//     getFullName: function() {
//         return 'First Name <' + this.fullAlternativeName.first +
//             '> Last Name <' +
//             this.fullAlternativeName.last;
//     },
//     setFullName: function(first, last) {
//         if (first !== null && typeof last === 'undefined') {
//             var names = first.split(' ');
//             console.log(names);
//             this.fullAlternativeName.first = names[0];
//             this.fullAlternativeName.last = names[1];
//         } else if (first !== null && last !== null) {
//             this.fullAlternativeName.first = first;
//             this.fullAlternativeName.last = last;
//         }
//     }

// }
// display(cat.getFullName());
// display('trying with 2 names in function');
// cat.setFullName('mino', 'lauro');
// display(cat.getFullName())

// display('trying with 1 name in function');
// cat.setFullName('mulion ali');
// display(cat.getFullName())



// display(cat.getType());

// display(JSON.stringify(cat));
// console.log(JSON.stringify(cat));


// display('first loop')
// for(var propertyName in cat){
// 	display(propertyName);
// }
// display('second loop')
// for(var propertyName in cat){
// 	display(propertyName+' '+cat[propertyName]);
// }

// display(Object.keys(cat));

//get the object descriptors 
// display(Object.getOwnPropertyDescriptor(cat, 'name'));
// display(Object.getOwnPropertyDescriptor(cat, 'typeOfCat'));
// display('cat typeOfCat before freezing')
// Object.freeze(cat.typeOfCat)
// display('cat typeOfCat after  freezing')
// display(Object.getOwnPropertyDescriptor(cat, 'typeOfCat'));
// Object.defineProperty(cat, 'color', {
//     writable: false
// });
// display(Object.getOwnPropertyDescriptor(cat, 'color'));
// display(Object.getOwnPropertyDescriptor(cat, 'name'));




// defining classes
//using es6
// class Cat{
// 	constructor(name,color){
// 		this.name=name,
// 		this.color=color
// 	}
// 	speak(){
// 		display("mulo");
// 	}
// };

// var cat1 = new Cat("pushyndo","brown");
// cat1.speak();
// display(cat1.name);
//using Object.create

// var cat = Object.create(Object.prototype, {
//     name: {
//         value: "fluf",
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     color: {
//         value: "black",
//         enumerable: true,
//         writable: true,
//         configurable: true
//     }
// })


// var cat = {
//     name: "mushy",
//     color: "black",
//     grow: function() {
//         display("growwwwwww")
//     }
// };
// cat.age = 5;
// cat.speak = function() {
//     display("meeeeeeeeee")
// };


// function Cat(name, color) {
//     this.name = name
//     this.color = color
// }

// var caterina = new Cat("porky","white");

// display(caterina.name)
// cat.speak();
// cat.grow();



// display(cat.name+" "+cat.age)