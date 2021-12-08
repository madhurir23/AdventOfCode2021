// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let arr = readFileLines('Day1-Input.txt');


var increases = 0; 
var windowSize = 3; // Part 1 : windowSize = 1 
for (let i = windowSize; i < arr.length; i++) {
  if (Number(arr[i]) > Number(arr[i-windowSize])) increases++;
} 

console.log(increases);