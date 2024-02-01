// "use strict";

// homework 5

// 1
let link = "https://google.com";

const linkValideition = (any) => any.indexOf("https://", 1) ? "Exist" : "Doesn't exist";

console.log(linkValideition(link))

// 2
const newDiv = document.querySelector("#myId");
newDiv.innerHTML = `
    <div class=“wrapper”>
        <img src = cat200.jpg alt="image">
        <h2 style="color: red; font-size: 30px;" class=“title”>image title</h2>
    </div>
`;


// 3
const text = document.querySelectorAll(".container");
text.forEach((el) => {
    let paragraph = document.createElement("p");
    paragraph.className = "text";
    paragraph.textContent = "hello";
    el.appendChild(paragraph);
} )

// 4
let array6 = [-1, -2, -3, 4];

const  resArr6 =  array6.some((elem) => elem  > 0);

console.log(resArr6)

// 5
const str = "12345";

const strArr = str.split("").map(Number);
console.log(strArr)

const sum = strArr.reduce((acc, curr) => acc + curr);

console.log(sum)

// 6
const numArr= [1,25,6,5,1];

const sumNum = numArr.reduce((acc, curr) => acc + curr);

console.log(sumNum)









