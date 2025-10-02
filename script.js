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
/* i
am a
multiline comment
*/
// if else if else ladder -> multiple if else's
//  a>b ? (a-b):(b-a) , ternary statment
console.log("loops"); // for loop,for in loop,for of loop , while loop , do while loop
let x =10;
for (let i = x; i <=15; i++) {
    console.log(i);
}
let o = {
    name: "kanu",
    role: "programmer",
    company : "CodeWithHarry"
};
for(const key in o){
    console.log(key);
}
for(const c of "kanu"){
    console.log(c);
}
let i=5;
while(i<6){
    console.log(i);
    i++;
}
do {
    console.log(i);
    i++;
} while (i<0);
console.log(i);
// functions in javascript
function nice(name){
    console.log("Hey "+name+"! you are beautiful");
}
nice("Kanu");
function sum(a,b){
    console.log(a+b);
}
sum(9,8);
function add(a,b,c=3){ //c is a default value
    return a+b+c;
}
console.log(add(5,5));
// NaN - Not a Number 
// arrow fuction
const fucn1 = (x)=>{
    console.log("I an a arrow function",x);
}
fucn1(33);
let a = "Kanupriya";
console.log(a.length);
console.log("Her name is "+ a);
console.log(`Her name is ${a}`); // string interpolation
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(4,9));
console.log(a.replace("a","x"));
console.log(a.replace("x","a"));
console.log(a.concat(".10","/03","/2006"));
console.log(a); //stringa are immutable in JS
console.log(a.startsWith("K"));


// coding faulty calculator
let random = Math.random();
let a = prompt("Enter first Number");
let b = prompt("Enter second Number");
let c = prompt("Enter Operations");
let obj = {
    "+":"-",
    "*":"+",
    "/":"**",
};
if(random>0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}else{
    c = obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}


let arr = [1,2,3,4,5,6,7]
console.log(arr);
console.log(arr.length);
// arrays are mutable
arr[0]=10;
console.log(arr);
// while string in JS are immutable
let a = "Kanu";
a[0]="P";
console.log(a);
console.log(arr.toString());
console.log(arr.join(" and "));
arr.pop();
console.log(arr);
arr.push(100);
console.log(arr);
arr.push("Kanu")
console.log(arr);
