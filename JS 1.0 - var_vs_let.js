"use strict"

if (true) {
    window.x = 10;
    var y = 20;
    let z = 30;
}

console.log(x); // result = 10
console.log(y); // result = 20
// console.log(z); // ReferenceError: z is not defined

window.num1 = 1;
window.num1 = 10; // OK

var num2 = 2;
var num2 = 20;    // OK

let num3 = 3;
// let num3 = 30;  // SyntaxError: redeclaration of let num3
num3 = 30; // OK

console.log(num4); // result = undefined
var num4 = 4;

(function () {
    console.log(num4); // result = undefined
    var num4 = 40;
})();


console.log(window.letter); // undefined
window.letter = 'a';

// console.log(num5); // ReferenceError: can't access lexical declaration `num5' before initialization
let num5 = 5;


function example() {
    let num_6 = 6;
    var num_7 = 7;
    window.num_8 = 8;
}

// console.log(num_6);     // ReferenceError: num_6 is not defined
// console.log(num_7);     // ReferenceError: num_7 is not defined
console.log(window.num_8); // undefined

function dummyFunction() {
    dummy = 'wtf'
    if (false) {
        var dummy;
    }

    console.log(dummy);

}

dummyFunction(); // wtf