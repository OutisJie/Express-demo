var express = require('express');
var app = express()

//构建一个服务器，响应来自根URL'/'的请求
app.get('/', function(req, res){
    res.send('Hello World');
});

//监听3000端口
app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});