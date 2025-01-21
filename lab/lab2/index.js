//Variables
// Declare Variables
let name="Surya";
let _age= 21;
//Declare four variables without assigning values
let a,b,c,d;
//Declare four variables with assigning values
let w=1;
let x=2;
let y=3;
let z=4;
//in multiple lines
let fname="Surya";
let lname="JJP";
let marital_stat="Single";
let country="India";
let age=21;
// in Single lines
let fname1="Surya",lname1="JJP",marital_stat1="Single",country1="India",age1=21;
// Declare two variables _myAge_ and _yourAge_ and assign them initial values, then log to the browser console
let _myAge_=21
let _yourAge_=25;
console.log("I am " + _myAge_ + " years old.");
console.log("You are " + _yourAge_ + " years old.");


//Constant
//Declare a variable using var, let, and const, and log their initial values to the console.
var myVar=1;
let myLet=2;
const myConst=3;
console.log("Initial Values:");
console.log("var:", myVar); 
console.log("let:", myLet); 
console.log("const:", myConst); 
//Try reassigning values to each variable.
myVar=4;
myLet=5;
console.log("After Reassignment:");
console.log("var:", myVar); 
console.log("let:", myLet); 
//What happens with const?
try {
    myConst = 60; // Error
} catch (e) {
    console.log("Error when reassigning const:", e.message);
}
//Try redeclaring each variable in the same scope.
//Observe the behavior of var, let, and const.
var myVar = 70; // Allowed

try {
    let myLet = 80; // Error
} catch (e) {
    console.log("Error when redeclaring let:", e.message);
}

try {
    const myConst = 90; // Error
} catch (e) {
    console.log("Error when redeclaring const:", e.message);
}

//Data Types
//Declare variables and assign string, boolean, undefined and null data types Whether you are a student (true/false).
let strVar="Hello"
let boolVar=true;
let undefVar;
let nullVar=null;

//Log the values and their types to the console using typeof.
console.log("Value:",strVar,"Type:", typeof strVar);
console.log("Value:",boolVar,"Type:", typeof boolVar);
console.log("Value:",undefVar,"Type:", typeof undefVar);
console.log("Value:",nullVar,"Type:", typeof nullVar);

//Find the Bug
function simulateFlaw() {  //Corrected Code
    if (true) {
        let sensitiveData = "This should not leak!";
    }
    //console.log(sensitiveData); // Error: sensitiveData is not defined
}

simulateFlaw();

/*
For Loops
Write a script to:
Print all even numbers between 1 and 20. */
var sum_of_even=0;
for(let i=1;i<=20;i++)
{
    if(i%2==0)
    {
    console.log(i+"\t");
    sum_of_even+=i;
    }

}

//arrow function 
const square = (num) => num * num;
console.log(square(10));

function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

console.log(randomUserIp()); 
