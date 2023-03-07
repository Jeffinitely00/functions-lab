// minusOne(10);        // 9
// minusOne(100);       // 99
// minusOne(Infinity);  // Infinity

function minusOne(num) {
    return num -1;
}
console.log(minusOne(5))




// makeSentence('I', 'want', 'chimichangas');

function makeSentence(string1, string2, string3) {
    return `oh ${string1} ${string2} ${string3}.`;
}
console.log(makeSentence("wow,", "i'm", "cold"))




// getLastElement([1, 2, 3, 4, 5, 6]);       // 6
// getLastElement(['a', 'b', 'c']);          // 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]

function getLastElement(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        return arr[arr.length -1];
    }
}
console.log(getLastElement([1, 2, 3, 4, 5, 6, 7]))


