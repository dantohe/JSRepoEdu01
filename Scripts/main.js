/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



function Drink(name, temp, color) {
    this.name = name;
    this.tem = temp;
    this.color = color;

    function setColor(newColor) {
        this.color = newColor;
    }
}

var coffee = new Drink("BUZZZ", "cold", "black")
console.log(coffee.color);
document.is
// coffee.setColor("red");
console.log(coffee.color);

// var myCoffee = {
//     flavour: "expresso",
//     color: "black",
//     size: "venti",
//     temperature: "cold",

//     reheat: function() {
//         if (myCoffee.temperature === "cold") {
//             myCoffee.temperature = "hot";
//         }
//     }
// };
// console.log(typeof(myCoffee))
// myCoffee.flavour = "whatever"
// console.log(myCoffee.temperature)
// myCoffee.reheat();
// console.log(myCoffee.temperature)


// whileFunction(10,20);

// var myArray = ["leo", "gicu", "george"]
// myArray[1] = "marcu"
// myArray.push("lula");
// console.log(myArray[1])

// for (i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//     myArray[i];
// }

// function doFunction(i, j) {
//     do {
//         console.log(i);
//     } while (i++ < j)
// }

// function whileFunction(i, j) {
//     while (i++ < j) {
//         console.log(">>" + i);
//     }
// }

// var something = 2;
// switch (something) {
//     case 1:
//         console.log("one");
//     case 2:
//         console.log("two");
//     case 3:
//         console.log("three");
//     default:
//         console.log("something else")
// }


function myFunction(a, b) {
    return a + b;
}

function myDivision(maximum) {
    for (i = 0; i < maximum; i++) {
        if (i % 3 === 0) {
            console.log(i + " divisible by 3 ");
        }
        if (i % 5 === 0) {
            console.log(i + " divisible by 5 ");
        }


        // switch (i) {
        //     case i % 3 === 0:
        //         console.log(i + " divisible by 3 ");
        //     case i % 5 === 0:
        //         console.log(i + " divisible by 3 ");
        // }
    }
}

// myDivision(100);

// for (i = 1; i < 10; i++) {
//     console.log(myFunction(i, 10));
// }
// alert("here you go");
// confirm("I love JS");
// prompt("do you want something?");

// console.log("here we go");


// function generateRandomBetweenTwoValues(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
// }

// function printResult(i) {
//     if (i % 3 === 0 && i !== 0) {
//         console.log("fizz " + i)
//     } else if (i % 5 === 0 && i !== 0) {
//         console.log("BUZZZ" + i)
//     } else {
//         console.log(i)
//     }
// }

// console.log("here is a random number "+generateRandomBetweenTwoValues(0,10))
// printResult(generateRandomBetweenTwoValues(0,100))