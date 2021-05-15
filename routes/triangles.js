var express = require('express');
var router = express.Router();
var Triangle = require('../models/triangle')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.post('/', (req, res, next) =>{


/*
Forma 1
let {sideOne, sideTwo, sideThree} = req.body;
let putita = new Triangle(sideOne, sideTwo, sideThree);*/


//Forma 2
let holis = new Triangle(req.body);
res.json(holis)

});

module.exports = router;
