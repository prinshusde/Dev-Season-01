const fs = require("fs");

console.log("Start");

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log("File Read");
});

console.log("Blocking starts");

// Main thread ko 5 seconds ke liye block kar diya
const start = Date.now();
while (Date.now() - start < 5000) {}

console.log("Blocking ends");