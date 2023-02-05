const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors= require('cors');


http.listen(3000, function(){
    console.log('server start');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.get('/test', function(req, res){ // 로그인 상태
    let result = {
        name : "comet", job: "programmer", age : 25
    };
    res.send(result);
})