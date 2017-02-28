var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true})); // to get the data from html form
app.set('view engine', 'ejs');

var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/friends', function(req, res) {
  res.render('friends', { friends });
});

app.post('/addfriend', function(req, res) {
  // console.log(req.body);
  var newFriend = req.body.newFriend;
  // console.log(req.body.newFriend);
  friends.push(newFriend);
  // res.send('YOU HAVE REACHED THE POST ROUTE!!');
  res.redirect('/friends');
});

app.listen(port, function(){
  console.log(`listening on port ${port}!`);
});
