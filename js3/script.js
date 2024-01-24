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

// 4
const checkIfNumIsOddOrEven = (num) => {
    if (num % 2 === 0) {
        return "this number is even";
    }

    return "this number is odd";
}

const number1 = checkIfNumIsOddOrEven(2);
console.log(number1)

const number2 = checkIfNumIsOddOrEven(7);
console.log(number2)

// ternary operator
const checkIfNumIsOddOrEven1 = (num) => {
   return num % 2 === 0 ? "this number is even" : "this number is odd";
}

const number3 = checkIfNumIsOddOrEven1(1);
console.log(number3)

const number4 = checkIfNumIsOddOrEven1(10);
console.log(number4)

// 5
let array = [1, 2, 3, 4, 5];

for (let i = array.length; i > 0; i--) {
    console.log(i)
}

// 6
const checkIfUserIsAdult = (age) => {
    return age >= 18 ? "Adult" : "Not adult";
}

const isAdult1 = checkIfUserIsAdult(25);

console.log(isAdult1);

const isAdult2 = checkIfUserIsAdult(17);

console.log(isAdult2);
