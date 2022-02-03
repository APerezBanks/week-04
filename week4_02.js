// Activity (1)
// Write a simple function which logs “Hello Code Nation” to the console.
// Then write a higher order function which will run our simple function five times,
//  even though you only call it one time.
// Hint: Pass the simple function as a parameter, and this will involve a for loop.



const simpleFunc = () => {
    console.log("Hello Code Nation");
}

const repeat = () => {
    for (let i = 0; i < 5; i++){
        console.log(simpleFunc)
    }

    
}
console.log(simpleFunc);


// obviusly I have no clue what I'm doing. it repeats 5 times but not the message... 



// Activity (2)
// The array method .map is an example of a higher
// order function.
// Declare a variable with five numbers, then
// use .map to iterate through the array and multiply each array item by 3.


let number = [3, 4, 5, 6, 9];
const newNumbers = number.map( result => {
    return result * 3;
});

console.log(newNumbers); 


// Activity (3)
// Test this function to make sure it works by passing
//  a number to the doMaths function, then passing a number 
//  and one of the four maths functions, to the returned function.

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
return a - b; }
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
return a/b; }
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
 }

//  another activity we never got back to doing, so no idea how to solve it.


        

// Zeller's Algorithm //

let d = 28;
let m = 12;
let y = 1987;
let f,l,s,x;

if (m < 3 ) {
    m = m + 12;
    y = y - 1;
}

    f = Math.floor(y / 100);
    l = y - 100 * f;

    s = Math.floor(2.6 * m - 5.39) + Math.floor(l /4) + Math.floor(f / 4) + d + l - Math.floor(2*f)

    x = s - (7 * Math.floor(s / 7));


    console.log(x)
// mira el video para terminarlo


    


















