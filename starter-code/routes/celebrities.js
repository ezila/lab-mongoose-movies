const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.js');

/* GET celebrities page */
router.get('/', (req, res, next) => { // /celebrities/
  Celebrity.find().then(function (celebrities) {
    console.log('Mes célébrités de la DB sont', celebrities);
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  }).catch(err => next(err));
});

// router.get('/add', function () {}) // /celebrities/add

module.exports = router;