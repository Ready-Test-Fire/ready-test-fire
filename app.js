const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const exec = require('child_process').exec
var http = require('http');
var port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('*', function(req, res, next) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/test', function(req, res){
    console.log("in app.js");
    let temp = JSON.parse(req.body['json'])
    let code = temp["code"]
    let test = temp["test"]
    let answer = temp["answer"]
        exec("docker run --rm codewars/node-runner run -l javascript -c '"+code+test+"' -t cw -f 'Test.assertEquals("+answer+")'", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }else
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                res.send(stdout)
      })

})

app.use('*', function(req, res, next) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})



app.listen(port, function(){
   console.log('Testing-app listening on port', port)
});
