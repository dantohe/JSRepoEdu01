"use sctrict";



var cat = {
    name: 'fluf',
    color: 'orange',
    typeOfCat: {
        tail: "long",
        ears: "shortEars"
    },
    getType: function() {
        return this.typeOfCat.tail + ' ' + this.typeOfCat.ears;
    },
    fullAlternativeName: {
        first: "defaultFirstName",
        last: "defaultLastName"
    },
    getFullName: function() {
        return 'First Name <' + this.fullAlternativeName.first +
            '> Last Name <' +
            this.fullAlternativeName.last;
    },
    setFullName: function(first, last) {
        if (first !== null && typeof last === 'undefined') {
            var names = first.split(' ');
            console.log(names);
            this.fullAlternativeName.first = names[0];
            this.fullAlternativeName.last = names[1];
        } else if (first !== null && last !== null) {
            this.fullAlternativeName.first = first;
            this.fullAlternativeName.last = last;
        }
    }

}
display(cat.getFullName());
display('trying with 2 names in function');
cat.setFullName('mino', 'lauro');
display(cat.getFullName())

display('trying with 1 name in function');
cat.setFullName('mulion ali');
display(cat.getFullName())



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