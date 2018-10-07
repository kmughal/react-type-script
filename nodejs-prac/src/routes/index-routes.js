const express = require('express');
const indexRoutes = express.Router();

indexRoutes.get('/', (_, res) => {
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


module.exports = indexRoutes;