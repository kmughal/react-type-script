const express = require('express');

const indexRoutes = express.Router();
const sql = require('mssql');
const sqlConfig = require('../commons/db-config');

indexRoutes
  .get('/', (req, res) => {
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
  })
  .route('/:id')
  .all((req, res, next) => {
    (async () => {
      try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request()
          .input('id', sql.Int, 5)
          .query('SELECT * FROM DBO.ToDo where id=@id;');
        req.item = result.recordset[0];
        sql.close();
        next();
      } catch (e) {
        console.log(e.message);
      }
    })();
  }).get((req, res) => {
    res.render('index', {
      item: req.item,
      books: [{
        name: `Learn C++ ${new Date().toLocaleDateString('en-us',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`,
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


module.exports = indexRoutes;
