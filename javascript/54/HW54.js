"use strict";

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 5));

console.log(multiply(25, 25));

console.log(multiply(36, 36));

function getMultiplyer() {
    return function (a, b) {
        return a * b;
    };
}
let multipyer = getMultiplyer();

console.log(multipyer(4, 4));

console.log(multipyer(10, 10));

function getMultiplyerC(a) {
    return function (b) {
        return a * b;
    };
}

let multipyerC = getMultiplyerC(6);

console.log(multipyerC(6));

let multipyerC1 = getMultiplyerC(7);

console.log(multipyerC1(7));

