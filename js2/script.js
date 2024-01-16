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


