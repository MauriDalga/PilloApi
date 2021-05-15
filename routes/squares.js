let express = require('express');
let Square = require('../models/square');
let router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.socket);
    res.send(`Toma un cuadrado pillo cometrabas. Sos: ${req.socket.remoteAddress}`)
});

router.post('/', (req, res, next)=> {
    let narcizo = new Square(req.body.side);
    res.json(narcizo);
})

module.exports = router;