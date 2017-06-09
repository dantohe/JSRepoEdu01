"use sctrict";
var cat = {
    name: "mushy",
    color: "black",
    grow: function() {
        display("growwwwwww")
    }
};
cat.age = 5;
cat.speak = function() {
    display("meeeeeeeeee")
};


function Cat(name, color) {
    this.name = name
    this.color = color
}

var caterina = new Cat("porky","white");

display(caterina.name)
// cat.speak();
// cat.grow();



// display(cat.name+" "+cat.age)