var bodyParser = require('body-parser'),
mongoose       = require('mongoose'),
express        = require('express'),
app            = express(),
port           = process.env.PORT || 3000;


// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
var Blog = mongoose.model('Blog', blogSchema);

// Blog.create({
//   title: 'Test Blog',
//   image: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg',
//   body: 'HELLO, THIS IS A BLOG POST!'
// });

// RESTFUL ROUTES
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// INDEX ROUTE
app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if(err) {
      console.log(err);
    } else {
      res.render('index', {blogs: blogs});
    }
  });
});

// NEW ROUTE

app.get('/blogs/new', (req, res) => {
  res.render('new');
});

// CREATE ROUTE
app.post('/blogs', (req, res) => {
  // create blog
  Blog.create(req.body.blog, (err, newBlog) => {
    if(err){
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
})


app.listen(port, ()=> {
  console.log(`Listening on PORT: ${port}!`);
});
