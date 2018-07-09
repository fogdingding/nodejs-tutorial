//02行 是像是python的import 或是 C的 include
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner2 function 
//當收到"connection"的事件，就會執行什麼的程式(function)
eventEmitter.on('connection', listner2);

// Fire the connection event 
//發送一個事件 "connection"
eventEmitter.emit('connection');

console.log("Program Ended.");