const socket = require('socket.io');
const app = socket('3000');
app.on('connection',function(socket){
    console.log('a user connected');
    socket.emit('welcome','hellow word');
})
console.log('listen on 3000');