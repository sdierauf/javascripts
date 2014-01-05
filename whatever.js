var net = require('net');
var arr = ["attempting remote access...", "deploying...", "grabbing remote address"];
Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}


net.createServer(function (socket) {
  socket.on('data', function(data) {
    var thing = function() {
      socket.write(arr.randomElement() + "\n");
    }
    setInterval(function() { thing()}, 3000);
    });

}).listen(5002);

console.log("server started");

