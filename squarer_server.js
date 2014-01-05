var net = require('net');

net.createServer(function (socket) {
  socket.write("Welcome to the Squarer server\n");
  socket.write("Send a number and I will square it.\n");

  socket.on('data', function(data) {
    var num = Number(data);
    socket.write(num * num + "\n");
  });


}).listen(5001);

console.log("Squaring server started\n");
