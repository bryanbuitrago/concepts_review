var bodyParser = require('body-parser'),
methodOverride = require('method-override');
mongoose       = require('mongoose'),
express        = require('express'),
app            = express(),
port           = process.env.PORT || 3000;


// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

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
//   body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
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
});

// SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
  // res.send('SHOW PAGE');
  Blog.findById(req.params.id , (err, foundBlog) => {
    if(err) {
        res.redirect('/blogs');
    } else {
        res.render('show', {blog: foundBlog});
    }
  });
});

// EDIT ROUTE
app.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if(err){
        res.redirect('/blogs');
    } else {
        res.render('edit', {blog: foundBlog});
    }
  });
});

// UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
  // res.send('UPDATE ROUTE');
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
    if(err) {
        res.redirect('/blogs');
    } else {
        res.redirect(`/blogs/${req.params.id}`);
    }
  });
});

app.delete('/blogs/:id', (req, res) => {
  // res.send('YOU HAVE REACHED THE DESTROY ROUTE!');
  // destroy blog
  Blog.findByIdAndRemove(req.params.id, (req, res) => {
    if(err) {
        res.redirect('/blogs');
    } else {
        res.redirect('/blogs');
    }
  });
});

app.listen(port, ()=> {
  console.log(`Listening on PORT: ${port}!`);
});
