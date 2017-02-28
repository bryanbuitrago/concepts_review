var express = require("express"); // require express
var app = express(); // set app to express

app.use(express.static('public')); // look inside the public folder for static css or js files
app.set('view engine', 'ejs'); // sets the views engine to ejs

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/fallinlovewith/:thing', function(req, res) {
  var thing = req.params.thing;
  // res.send(`You fell in loe with ${thing}!`);
  res.render('love', { thing });
});

app.get('/posts', function(req, res) {
  var posts = [
    {title: 'Post 1', author: 'Cecil'},
    {title: 'I love skydiving', author: 'Bryan'},
    {title: 'I need to meditate', author: 'The Buddha'}
  ];

  res.render('posts', { posts });

});

app.listen(3000, function() {
  console.log('Running on port 3000!');
});
