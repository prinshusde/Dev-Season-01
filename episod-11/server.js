const http = require("node:http")

const server = http.createServer(function(req,res){
    res.end("Hello world")
})

server.listen(4242,()=>{
    console.log("Server is running on port 4242")
});