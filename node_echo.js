var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

console.log("now listening on port 1338");

server.listen(1338, '128.208.1.139');
