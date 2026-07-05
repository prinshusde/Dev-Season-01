const fs = require("fs");

setImmediate(()=>console.log("setImmediate")) //A

setTimeout(()=>console.log("Timmer Expired"),0) //B

Promise.resolve("Promise").then(console.log) //C

fs.readFile("./file.txt","utf8",()=>{ //D
    setTimeout(()=>console.log("2nd Timmer"),0)

    process.nextTick(()=>console.log("2nd Next.tick"))

    setImmediate(()=>console.log("2nd setImmediate"))

    console.log("File reading CBnd ")
})

process.nextTick(()=>console.log("Next.tick")) //E


console.log("Last line of the file")


// Last line of the file
//next tick
//Promise
// Timmer Expired
//setImmediate
// File reading CBnd 
// 2nd Next.tick
// 2nd setImmediate
// 2nd Timmer

// Browser Output

// Last line of the file
// Next.tick
// Promise
// Timmer Expired
// File reading CBnd 
// 2nd Next.tick
// setImmediate
// 2nd setImmediate
// 2nd Timmer
