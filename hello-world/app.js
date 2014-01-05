var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res) {
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});

app.get('/fuck.txt', function(req, res) {
  res.send('What do you want?');
  console.log("fuck.txt accessed");
});

app.listen(4000);
console.log('listening on port 4000');

