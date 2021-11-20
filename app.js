const express = require('express'); 
const port = 3000;
var path = require('path');
const fs = require('fs'); 


var app = module.exports = express();

// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views', path.join(__dirname, 'views'));

// Path to our public directory
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')));

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('home', { });
});

app.get('/comments', (req, res) => {

    try {
      const data = fs.readFileSync(path.join(__dirname, 'store/comments.txt'), 'utf8');
      var comments = data.split(',');
      res.send(JSON.stringify(comments));
    } catch (err) {
      res.send("Error to read file");
    }
});
 

app.post('/comment/new', (req, res) => { 
  let data = JSON.stringify(req.body); 
  fs.appendFileSync(path.join(__dirname, 'store/comments.json'), ',' + data);
  res.send(data);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});