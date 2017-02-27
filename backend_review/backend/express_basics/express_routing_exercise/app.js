var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res) {
  var animal = req.params.animal;
  if(animal === 'pig') {
    res.send(`The ${animal} says Oink`);
  } else if(animal === 'cow') {
    res.send(`The ${animal} says Moo`);
  } else if(animal === 'dog') {
    res.send(`The ${animal} says Woof Woof!`);
  } else if(animal === 'cat') {
    res.send(`The ${animal} says Meow`);
  } else if(animal === 'lion') {
    res.send(`The ${animal} says Roar`);
  }
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
})
