var express = require('express');
var router = express.Router();
// var path = require('path');
// var bodyParser = require('body-parser');
// var e = require('../libs/error');

// router.use('/api/*', (req, res, next) => {
//     if (req.session.login2 == true) {
//         req.session.touch();
//         next();
//     } else {
//         res.status(e.status('008')).json(e.json('008'));
//     }
// });