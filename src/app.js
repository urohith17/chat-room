var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
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
      })
  });
  
  http.listen(3000, () => {
    console.log('listening on *:3000');
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  app.get('/:id', (req, res) => {
    res.sendFile(__dirname + '/chat-room.html');
  });