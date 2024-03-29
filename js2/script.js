"use strict";
// homework js 2

// 1
for(let i = 5; i < 100; i++) {
    console.log(i);
}

// 2
const  array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// sorting array by ascending  => (it takes callback function)
const sortedArray =  array1.toSorted((a, b) => a - b);

console.log(sortedArray);

for (let i = 0; i < sortedArray.length; i++) {
    let res = sortedArray[i];

    if (res > 0 && res < 10)
        console.log(res);
}


// 3
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

while (i < array2.length) {

    if (array2[i] === 5) {
        console.log("this number exist");
        break;
    }
    i++;
}

// for loop
for (let i = 0; i < array2.length; i ++) {
    if (array2[i] === 5) {
        console.log("true");
        break;
    }
}


// 4
const array3 = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < array3.length; i++){
    sum += array3[i];
}
console.log(sum);

// forEach
let sumOfElements = 0;
array3.forEach((el => sumOfElements += el));
console.log(sumOfElements);

// reduce
let sumReduce = array3.reduce((acc, curr) => acc + curr, 0);
console.log(sumReduce);

/*
        0 + 1 --> 1
        1 + 2 --> 3
        3 + 3 --> 6
        6 + 4 --> 10
        10 + 5 --> 15
*/

// 5

let arithmeticMean = 0;

for (let i = 0; i < array3.length; i++) {
    arithmeticMean += array3[i];
}

let mean = arithmeticMean / array3.length;
console.log(mean);

// or
let result = array3.reduce((acc, curr) =>  {
    return acc + curr;
});
let mean1 = result / array3.length;
console.log(mean1)

// 6
let array5 = [1, 2, 3, 7, 6, 9]
for (let num of array5) {
    if (num === 7)
        continue;
    console.log(num)
}

// 7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

// Object.values() to get value and join() to collect array of letters into string
let status = Object.values(user.studentstatus).join("");
console.log(status)

const status1 = user.studentstatus;
console.log(status1);


// 8
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if(user2.age < 18 && user2.studentstatus === "active"){
    console.log("Hello user");
}else if(user2.name === "levani"){
    console.log("hello levani");
}else  if(user2.studentstatus === "active" || user2.age < 25){
    console.log("hello anna")
}else {
    console.log("error")
}

let res = user2.age < 18 && user2.studentstatus === "active"
    ? "Hello user"
    : user2.name === "levani"
    ? "hello levani"
    :  user2.studentstatus === "active" || user2.age < 25
    ? "hello anna"
            :"error";

console.log(res)

// 9
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for (const n of array6) {
    if (n % 2 === 0)
        console.log(n)
}

// 10
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (const user of users) {
    for (const userKey in user) {
        if (user.status === true)
            console.log(user);
    }
}

// 11
let array7 = [32, 14, 10, "hello", null, "40", 50];

for (const el of array7) {
    if (el % 5 === 0 && typeof el === "number"){
        console.log(el);
    }
}

// 12
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];
for (const elem of array8) {
    for (const num of elem) {
        if (num > 0)
            console.log(num)
    }
}
