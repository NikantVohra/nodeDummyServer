var express = require('express');
var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var leaderboardTop = [{id : "3", name : "John", score : 98}, {id : "2", name : "Emily", score : 96}, {id : "40", name : "Luis", score : 90}, {id : "23", name : "Jane", score : 89}, {id : "121", name : "Joey", score : 78}];
var leaderboardMy = [{id : "50", name : "Rohan", score : 52}, {id : "76", name : "Monica", score : 50}, {id : "34", name : "Nikant", score : 48}, {id : "234", name : "Ross", score : 40}, {id : "126", name : "Rachel", score : 30}];


app.get('/leaderboard/overall', function(req, res) {
  res.send(JSON.stringify(leaderboardTop));
});

app.get('/leaderboard/my', function(req, res) {
  res.send(JSON.stringify(leaderboardMy));
});


app.listen(server_port);
console.log('Listening on port 8080...');
