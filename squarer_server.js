var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('This server squares whatever number you send it\r\n');

