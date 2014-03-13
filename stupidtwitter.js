var net = require('net');

var messages = ["I am a dummy message"];

var isGet = function(words) {
  return words[0] == "-get";
}

var isAdd = function(words) {
  return words[0] == "-add";
}

net.createServer(function (socket){
  socket.write("Welcome to the stupidest server ever\n");
  socket.write("To view all stored messages, type -get\n\n");

  socket.on('data', function(data){
    var data = String(data).replace(/\n|\r/g, "");
    console.log(data);
    var words = data.split(" ");

    if (isGet(words)) {
      var num = 1;
      messages.forEach(function(entry){
        num++;
        socket.write(num + ". " + entry + "\n");
      });
    } else if (isAdd(words)) {
      messages.push(data.substring(5));
    } else {
      socket.write("Request \"" + data + "\" not understood\n");
    }
  });
}).listen(5001);

console.log("Server started on port 5001\n");
