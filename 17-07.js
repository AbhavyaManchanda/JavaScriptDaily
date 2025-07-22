const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
eventEmitter.on('student', () => {
    console.log("start");
})
eventEmitter.emit('student');

