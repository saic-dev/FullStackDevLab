const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
eventEmitter.once('userDetails', (name,age) => {
    console.log('Hello, '+name+" ! You are "+age+" years old.");
  });
eventEmitter.emit('userDetails','Sai',19);
//eventEmitter.emit('userDetails','Sai',19);