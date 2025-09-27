alert("you are welcomed!");
console.log("code is running....");
console.log("code is also running....");
var a = prompt("Enter your number");
console.log("your number is " +a);
var isTrue = confirm("are you sure you want to continue with this number");
if(a%2==0 && isTrue){
    console.log("This ia a even number");
}else{
    console.log("This is Odd Number");
}
document.title="Hey! I am good";
document.body.style.backgroundColor="pink"

console.log("code is running....");
var a=5;
var b=6;
var c="Kanu"
console.log(a+b+"kanu");
console.log(typeof a,typeof c);
// JS is case sensitive
// var has global scope and let & const are blocked scope
const s =9;
// s=s+1; not allowed 
{
    var a=5;
    console.log(a);
}
console.log(a);
let x = "Kanu";
let y = 10;
let z = 10.7;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);
let o ={
    name:"Kanu",
    "job role":1003,
};
console.log(o);
o.salary = "cr";
console.log(o);
console.log("hello i am conditional Tutorial");
let age =16; //local sope
let grace = 2;
console.log(age**grace); //exponential operator
if((age+grace)>18){
    console.log("You can drive");
}else{
    console.log("you cannot drive");
}
// === -> check for type as well as for value
// > "3"==3
// true
// > "3"===3
// false

