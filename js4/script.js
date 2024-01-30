"use strict";

// Homework js 4

// 1
let array2 = [14, 150, 'css', null, 'javascript', 25];

const newArray = array2.map((el) => {
    if (typeof el === "number") {
        return el * el;
    } else if (typeof el === "string") {
        return el.toUpperCase();
    } else {
        el;
    }
})

console.log(newArray)

// 2
let info = "good day";

const day = info.slice(5);
console.log(day)

// 3
const strLength = (str) => str.length;

const res = strLength("something");
console.log(res)

// 4
/*let questsion = prompt("capital of georgia ?");

let corrAnswer = "tbilisi";

questsion.toLowerCase() === corrAnswer ? alert("correct") : alert("not correct");*/

// 5
let fruits = ["apple", "mango", "avocado","kiwi"];
fruits.splice(-2,1,"strawberry");

console.log(fruits)

// 6
const array3 = [5, 25, 89, 120, 36];

array3.push("javascript", "python");
array3.unshift("html", "css");

console.log(array3);

array3.shift();
array3.pop();

console.log(array3);

// 7
const fruints1 = ["Orange", "banana", "kiwi"];
console.log(fruints1)

fruints1.push("Apple", "pineapple");
fruints1.unshift("Watermelon");

console.log(fruints1);

fruints1.splice(2,0,"Mango");
fruints1.shift();
fruints1.pop();

console.log(fruints1)

// 8
let array4 =[1, 2, 3, 4, 5];

array4.splice(3,0,"a","b","c");
console.log(array4);

// 9
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

const resArray5 = array5.map((elem) => elem / 3);

console.log(resArray5)

// 10
let array7 =  [15, 100, 25, 10, 36];

array7.splice(-2,1);
console.log(array7)

// 11
let array8 = [1, 2, 3 , 4 , 5];

array8.splice(2,1,"three");

console.log(array8)

// 12
let array1 =["hello1", 14,24, "hello2"];

const resArr1 = array1.filter((el) => typeof el === "number")

console.log(resArr1)

// 13
let array9 = [1, 2, 3, 4, 5];

let sum = 0;
array9.forEach((el) => sum += el)

console.log(sum)


// 14
let languages = ['html', 'css', 'javascript', "python", 'php'];

const resLanguages = languages.filter((el) => el.length > 3)

console.log(resLanguages)

// 15
let words = ['Madrid', 'rome', 'milan', 'berlin'];

const wordsRes = words.filter((el) => el.match(/m/gi));

console.log(words)
console.log(wordsRes)
