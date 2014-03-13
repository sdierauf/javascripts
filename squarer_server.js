var net = require('net');


net.createServer(function (socket) {
  socket.write("Welcome to the Squarer server\n");
  socket.write("Send a number and I will square it.\n");

  socket.on('data', function(data) {
    if (isNumber(data)) {
      var num = Number(data);
      socket.write(num * num + "\n");
    } else {
      socket.write("That's not a number!\n");
    }
  });


}).listen(5001);

var isNumber = function(num) {
  var regex = new RegExp('[0-9]');
  return regex.test(num);
}

console.log("Squaring server started on port 5001\n");
