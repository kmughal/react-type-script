const express = require('express');

const indexRoutes = express.Router();
const IndexController = require('../controllers/indexController');

const ctrl = new IndexController();

const setupRoutes = () => {
  indexRoutes
    .get('/', ctrl.get)
    .route('/:id')
    .all(ctrl.getTodoById)
    .get(ctrl.getTodo);
  return indexRoutes;
};

module.exports = setupRoutes;
