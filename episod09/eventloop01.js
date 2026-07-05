const fs = require("fs");

const a=100;

setImmediate(()=>console.log("setImmediate"))

Promise.resolve("Primise").then(console.log)

fs.readFile("./file.txt","utf8",()=>{
    console.log("File reading CB")
})

setTimeout(()=>console.log("Timmer Expired"),0)

const myPromise = new Promise((resolve,reject)=>{
         setTimeout(()=>{
               if(1){
                  resolve("Promise resolved")
               }else{
                   reject("Promise rejected")
               }
         },0)
})

myPromise.then(fullfilledA,fullfilledB)

function fullfilledA(value){
    console.log("Resolved: ",value)
}

function fullfilledB(value){
    console.log("Rejected: ",value)
}

process.nextTick(()=>console.log("Next.tick"))



function printA(){
    console.log("a: ",a)
}

printA()

console.log("Last line of the file")


