var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  var campgrounds = [
    {name: 'Salmon Creek', image: 'http://cdn-jpg2.theactivetimes.net/sites/default/files/camping.jpg'},
    {name: 'Granite Hill', image: 'http://travelchannel.sndimg.com/content/dam/images/travel/fullrights/2016/01/14/national-park-camping/camping-voyageurs-national-park-tent.jpg.rend.tccom.1280.960.jpeg'},
    {name: 'Mountain Goat\'s Rest', image:'http://travelchannel.sndimg.com/content/dam/images/travel/fullrights/2016/01/14/national-park-camping/camping-glacier-national-park-camping.jpg.rend.tccom.1280.960.jpeg'}
  ];
    res.render('campgrounds', { campgrounds });
});

app.listen(port, ()=> {
  console.log(`listening on port ${port}!`) ;
});
