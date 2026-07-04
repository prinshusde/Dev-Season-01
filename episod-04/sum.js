console.log("Sum module")

let a = 10

function sum(a,b){
   console.log("Sum is: ",a+b)
} 

//module.exports = sum


module.exports = {
    a,
    sum
}