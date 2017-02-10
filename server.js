
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
const router = express.Router();

// init app
const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// parse application - middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set static path
app.use(express.static(path.join(__dirname, 'public')));

router.use(function (req,res,next) {
  next();
});

// home
router.get("/",function(req,res){
  res.render('index', {
    title: 'home',
    form: false,
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  });
});

// capitals
router.get("/capitals",function(req,res){
  res.render('capitals', {
    title: 'capitals',
    form: true
  });
});

// geolocation
router.get("/geolocation",function(req,res){
  res.render('geolocation', {
    title: 'geolocation',
    form: false
  });
});

app.use("/", router);

// 404
app.use("*",function(req,res) {
  res.render('404', {
    title: '404',
  });
});

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});
