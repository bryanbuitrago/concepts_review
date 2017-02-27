var express = require('express');
var app = express();

// ===== ORDER OF ROUTES MATTERS ========

// "/" => "Hi There!"
app.get("/", function(req, res) {
  console.log("SOMEONE HAS MADE A REQUEST FOR THE ROOT '/' OR HOMEPAGE");
  res.send("Hi There!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
  console.log("SOMEONE HAS MADE A REQUEST TO /bye")
  res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
  console.log("SOMEONE HAS MADE A REQUEST TO /dog");
  res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
  // console.log(req.params);
  var subreddit = req.params.subredditName;
  res.send(`WELCOME TO THE ${subreddit.toUpperCase()} SUBREDDIT!`);
});

app.get("/r/:subredditeName/comments/:id/:title/", function(req, res) {
  console.log(req.params);
  res.send("WELCOME TO THE COMMENTS PAGE!");
})

// "*" => Usefull for when the user tries to access an undefined route, or goes a random route by mistake
// "*" => Used to show error messages, or error pages
// "*" => If placed at the top, will override all the other routes
app.get("*", function(req, res) {
  res.send("YOU ARE A STAR!!!");
});
// Tell Express to listen for requests (start server)
app.listen(3000, function() {
  console.log('listening on port 3000!');
});
