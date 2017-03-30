var express = require('express');
var app = express();
var mongo = require('mongoose')

var db = mongo.connect('mongodb://mongo:27017/dev'); // see docker-compose.yml nodeapp links mongo

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(8080);