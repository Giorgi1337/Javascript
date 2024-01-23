"use strict";
// Homework js 3


// 1
const sumOfNumbers = (... arr) => { // with Spread Operator
    let res = 0;

    for (const argument of arr) {
        res += argument;
    }

    return res;
}


const res = sumOfNumbers(10, 50, 6, 7, 8, 11, 6, 3, 9);

console.log(res);

// 2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

// ternary operator
const checkIfPersonWasLoggedIn = (obj) => {
    return obj.isloggedin === true ? `${obj.firstname} ${obj.lastname}` : obj.isloggedin !== false;
}

const resOfOjb = checkIfPersonWasLoggedIn(user);

console.log(resOfOjb)

// alternative version
const checkIfPersonWasLoggedIn1 = (obj) => {
    let hasFlag = false;

    if (obj.isloggedin === true)
        hasFlag = `${obj.firstname} ${obj.lastname}`;

    return hasFlag;
}

const resOfOjb1 = checkIfPersonWasLoggedIn1(user);

console.log(resOfOjb1);

// or
const checkIfPersonWasLoggedIn2 = (obj) => {
    if (obj.isloggedin === true)
        return `${obj.firstname} ${obj.lastname}`;

    return false;
}

const resOfOjb2 = checkIfPersonWasLoggedIn2(user);

console.log(resOfOjb2);

// 3
const maxNumInArray = (... arr) => {
    for (const arrElem of arr) {
        if (typeof arrElem !== "number" || isNaN(arrElem)) {
            return "Invalid data type";
        }
    }
    return arr.reduce((acc, curr) => Math.max(acc, curr));
}

const maxNum = maxNumInArray(5, 25, 15, 10);

console.log(maxNum)




