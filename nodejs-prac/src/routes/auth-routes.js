const express = require('express');

const loginRoutes = express.Router();

const authRoutes = () => {
  loginRoutes
    .get('/', (req, res) => {
      res.render('login');
    })
    .post('/', (req, res) => {
      res.json(req.body);
    });
  return loginRoutes;
};

module.exports = authRoutes;