// 1

const num = 100;

if(num < 50) {
    console.log("less than 50");
}else if (num > 20) {
    console.log("more than 20");
}else {
    console.log("Error");
}

// with ternary operator

const res = num < 50 ? "less than 50" : num > 20 ? "more than 20" : "Error";

console.log(res)

// 2 ternary operator

const str = "Mariam";

const result =  str == "Mariam" ? true : false;

console.log(result)

// 3 switch case

switch (str) {
    case "Mariam":
        console.log("true");
        break;
    default:
        console.log('false');
}