// Importing the fs module
let fs = require("fs")

function getInputArray() {
  // Intitializing the readFileLines with the file
  const readFileLines = filename =>
     fs.readFileSync(filename)
     .toString('UTF8')
     .split('\n');

  // Calling the readFiles function with file name
  return readFileLines('Day2-Input.txt');
}

function getResult(a, b) {
  return a * b;
}

function partA() {
  let arr = getInputArray();
  var depth = 0;
  var position = 0;
  for (let i = 0; i < arr.length; i++) {
    var command = arr[i];
    let tokens = command.toString().split(" ");
    switch(tokens[0]) {
      case 'forward' : 
        position = position + Number(tokens[1]);
        break;
      case 'up' : 
        depth = depth - Number(tokens[1]);
        break;
      case 'down' : 
        depth = depth + Number(tokens[1]);
        break;  
    }
  }
  console.log(getResult(position, depth));
}

function partB() {
  let arr = getInputArray();
  var aim = 0;
  var depth = 0;
  var position = 0;
  for (let i = 0; i < arr.length; i++) {
    var command = arr[i];
    let tokens = command.toString().split(" ");
    switch(tokens[0]) {
      case 'forward' : 
        var X = Number(tokens[1]);
        position = position + X;
        depth = depth + (X * aim); 
        break;
      case 'up' : 
        aim = aim - Number(tokens[1]);
        break;
      case 'down' : 
        aim = aim + Number(tokens[1]);
        break;  
    }
  }
  console.log(getResult(position, depth));
}

partA();
partB();  
