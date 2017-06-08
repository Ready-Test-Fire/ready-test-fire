const express = require('express');
const app = express();
const path = require('path')
var http = require('http');
var port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use('*', function(req, res, next) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.listen(port, function(){
   console.log('Testing-app listening on port', port)
});
