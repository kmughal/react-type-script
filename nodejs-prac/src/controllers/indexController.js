const debug = require('debug')('app:indexRoutes');
const TodoService = require('../services/todo-service');

class IndexController {
  getTodo(req, res) {
    res.render('index', {
      item: req.item,
      books: [{
        name: `Learn C++ ${new Date().toLocaleDateString('en-us',
          {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          })}`,
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
  }

  getTodoById(req, res, next) {
    const id = req.params.id;
    debug('get todo for ', id);
    const service = new TodoService();
    service.get(id, req, next);
  }

  get(req, res) {
    res.render('index', {
      list: ['a', 'b'],
      item: req.item,
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
  }
}


module.exports = IndexController;
