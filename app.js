const express = require('express');
const app = express();
var http = require('http');
var port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(port, function(){
   console.log('Testing-app listening on port', port)
});
