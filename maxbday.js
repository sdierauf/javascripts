var net = require('net');

net.createServer(function (socket) {
	socket.write("Welcome to the Max Birthday Server\n");
	socket.write("Are you Maximilian Golub?\n");
	
	socket.on('data', function(data) {
		if 
