const logEvent = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('log',(msg)=> logEvent(msg));

setTimeout(()=>{
    myEmitter.emit('log','Log event emitted!');
},2000);