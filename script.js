"use sctrict";



var cat = {
    name: 'fluf',
    color: 'orange'
}

//get the object descriptors 
display(Object.getOwnPropertyDescriptor(cat,'name'));
display(Object.getOwnPropertyDescriptor(cat,'color'));




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