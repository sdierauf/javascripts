var net = require('net');

net.createServer(function (socket) {
	socket.write("Welcome to the Max Birthday Server\n");
	socket.write("Are you Maximilian Golub?\n");
	
	socket.on('data', function(data) {
		if ("yesYES".indexOf(data) > -1) {
      socket.write("Happy birthday Max!");
    } else {
      socket.write("Fuck off it's not your birthday");
    }
  });
}).listen(13124);

console.log("bday server started\nlistening on 13124");


