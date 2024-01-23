"use strict";
// Homework js 3


// 1
const sumOfNumbers = (... arr) => { // with Spread
    let res = 0;

    for (const argument of arr) {
        res += argument;
    }

    return res;
}


const res = sumOfNumbers(10, 50, 6, 7, 8, 11, 6, 3, 9);

console.log(res)
