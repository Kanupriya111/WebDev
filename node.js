console.log("code is running....")
console.log("code is also running....")
console.log("code is running Cool...")
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}
function sum(a,b,c){
    return a+b+c;
}
(async function main(){
    /*let a = await sleep()
    console.log(a)
    let b= await sleep()
    console.log(b)*/
    let [x,y,...rest] =[1,5,7,8,9,10]
    console.log(x,y,rest)
    let obj={
        a:1,
        b:2,
        c:3
    }
    let {a,b} = obj
    console.log(a,b)
})()
let arr = [1,4,6]
console.log(arr[0]+arr[1]+arr[2])
console.log(sum(...arr));

// ... -> destructuring or spread operator
const express = require('express')
const app = express()
const port = 3000
app.get('/' ,(req,res) => {
    res.send(`Hello World`)
})
app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`)
})
import path from "path"
const fs = require("fs")
console.log(fs)
console.log("starting")
// fs.writeFileSync("kanu.txt","Kanu is a good girl")
fs.writeFile("kanu.txt","Kanu is a good girl",()=>{
    console.log("done")
    fs.readFile("kanu.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("kanu.txt"," Kanupriya",(e,d)=>{
    console.log(d)
})
console.log("ending")
console.log(path)
