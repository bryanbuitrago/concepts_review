var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3000,
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose')

mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//   {
//     name: 'Granite Hill',
//     image: 'http://i742.photobucket.com/albums/xx62/wanderingSoul_photos/camping_kashmir.jpg'
//   }, function(err, campground) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log('NEWLY CREATED CAMPGROUND: ');
//       console.log(campground);
//     }
//   });


app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
      if(err) {
        console.log(err);
      } else {
        res.render('campgrounds', { campgrounds: allCampgrounds });
      }
    });
});

app.post('/campgrounds', (req, res) => { // route to create a new campground
  // console.log(req.body);
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  Campground.create(newCampground, (err, newlyCreated) => {
    if(err) {
      console.log(err);
    } else {
      // redirect back to campgrounds page
      res.redirect('/campgrounds');
    }
  });
});

app.get('/campgrounds/new', (req, res) => { //shows the form that sends the data to the post route
  res.render('new');
});

app.listen(port, ()=> {
  console.log(`listening on port ${port}!`);
});
