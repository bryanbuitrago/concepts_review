var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res) {
  // ====== SECOND SOLUTION ======
  var sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!',
    cat: 'Meow',
    lion: 'Roar'
  }
  var animal = req.params.animal;
  var sound = sounds[animal];
  console.log(sound);
  res.send(`The ${animal} says ${sound}`);

  // ====== FIRST SOLUTION =====
  // var animal = req.params.animal;
  // if(animal === 'pig') {
  //   res.send(`The ${animal} says Oink`);
  // } else if(animal === 'cow') {
  //   res.send(`The ${animal} says Moo`);
  // } else if(animal === 'dog') {
  //   res.send(`The ${animal} says Woof Woof!`);
  // } else if(animal === 'cat') {
  //   res.send(`The ${animal} says Meow`);
  // } else if(animal === 'lion') {
  //   res.send(`The ${animal} says Roar`);
  // }
});

app.get('/repeat/:word/:times', function(req, res) {
  var word = req.params.word;
  var times = req.params.times;
  var repeatWord = '';
  for(var i = 0; i < times; i++) {
    repeatWord += word + ' ';
  }
  res.send(repeatWord);
});

app.get('*', function(req, res) {
  // console.log(req.params[0]);
  var unknownRoute = req.params[0]; // gets the wrong route the user was trying to access
  res.send(`Sorry, the page "${unknownRoute}" was not found... What are you doing with your life?`);
})

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
