const express = require('express');
const debug = require('debug')('app');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');
const indexRoutes = require('./src/routes/index-routes');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/js', express.static(path.join(__dirname, '/public/', '/js/')));
app.set('views', './src/views/');
app.set('view engine', 'ejs');
app.use('/index', indexRoutes);
app.get('/', (req, res) => {
  debug('request is coming');
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  debug('starting server');
});