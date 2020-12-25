var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
  cors: {
    origin: "*",
  }
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
      socket.on('chat message',(data)=>{
        console.log(data);
            socket.broadcast.to(data.room).emit('chat message', data.message );
      });
      socket.on('join room',(room)=>{
          socket.join(room);
          console.log('joined');
          console.log(socket.rooms);
      })
  });
  
  http.listen(3000, () => {
    console.log('listening on *:3000');
  });