const readlineSync = require("readline");


let name = readlineSync.question('What is your name? ');
console.log(`Welcome ${name}`)
