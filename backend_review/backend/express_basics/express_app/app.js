var express = require('express');
var app = express();

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
// Tell Express to listen for requests (start server)
app.listen(3000, function() {
  console.log('listening on port 3000!');
});
