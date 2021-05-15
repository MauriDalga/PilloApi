var express = require('express');
var router = express.Router();
Circle = require('../models/circle');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* POST Circle */
router.post('/', (req, res, next) => {
  console.log(req.app.locals.db); 
  let circle = new Circle(req.body.radius);
  res.json(circle);
});

module.exports = router;