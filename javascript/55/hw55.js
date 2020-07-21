function oEvery(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }

    return true;
}



const upper = ['A', 'B', 'C']
const lower = ['a', 'b', 'c']
const mixed = ['a', 'b', 'C']

console.log(oEvery(upper, letter => letter === letter.toUpperCase()));
console.log(oEvery(lower, letter => letter === letter.toUpperCase()));
console.log(oEvery(mixed, letter => letter === letter.toUpperCase()));

////////////////////////////////////////////////

function ourSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

console.log(ourSome(lower, letter => letter === letter.toUpperCase()));
console.log(ourSome(mixed, letter => letter === letter.toUpperCase()));

console.log(upper.some(isUpper));
console.log(lower.some(isUpper));
////////////////////////////////////////////////////

function onlyIf(array, test, action) {
    array.forEach(elem => {
        if (test(elem)) {
            action(elem);
        }

    });

}

function isUpper(letter) {
    return letter === letter.toUpperCase();
}
console.log('test')
console.log(onlyIf(upper, isUpper, console.log));
console.log(onlyIf(mixed, isUpper, console.log));

///////////////////////////////////////////

upper.filter(isUpper).forEach(elem => console.log(elem));
mixed.filter(isUpper).forEach(elem => console.log(elem));


