
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('funcionó GET /user/');
  });
  router.post('/', function(req, res, next) {
    res.send('funcionó POST /user/');
  });
  router.get('/add', function(req, res, next) {
    res.send('funcionó GET /user/add');
  });

module.exports = router