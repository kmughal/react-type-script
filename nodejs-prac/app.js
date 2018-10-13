const express = require('express');
const debug = require('debug')('app');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const indexRoutes = require('./src/routes/index-routes');
const authRoutes = require('./src/routes/auth-routes');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/js', express.static(path.join(__dirname, '/public/', '/js/')));
app.set('views', './src/views/');
app.set('view engine', 'ejs');
app.use('/index', indexRoutes());
app.use('/login' , authRoutes());
app.get('/', (req, res) => {
  debug('request is coming');
  res.sendFile(`${__dirname}/index.html`);
});


// app.get('/login' ,(_,res)=> {
//   res.render('login');
// });

app.listen(port, () => {
  debug('starting server');
});