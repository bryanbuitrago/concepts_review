var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res) {
  var thing = req.params.thing;
  // res.send(`You fell in loe with ${thing}!`);
  res.render('love.ejs', { thing });
});

app.get('/posts', function(req, res) {
  var posts = [
    {title: 'Post 1', author: 'Cecil'},
    {title: 'I love skydiving', author: 'Bryan'},
    {title: 'I need to meditate', author: 'The Buddha'}
  ];

  res.render('posts.ejs', { posts });

});

app.listen(3000, function() {
  console.log('Running on port 3000!');
});
