var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});
console.log('listening on: 2012');
app.listen(2012);