const express = require('express');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const routes = express.Router();

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/js', express.static(path.join(__dirname, '/public/', '/js/')));
app.set('views', './src/views/');
app.set('view engine', 'ejs');

routes.get('/', (_, res) => {
  res.render('index', {
    list: ['a', 'b'],
    books: [{
      name: 'Learn C++',
      author: 'unknown',
    },
    {
      name: 'Learn Java',
      author: 'Open source',
    }, {
      name: 'Learn Core data',
      author: 'From apple',
    },
    ],
  });
});


app.use('/index', routes);

app.get('/', (req, res) => {
  debug('request is coming');
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  debug('starting server');
});
