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

/* GET celebrities details page */
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(function (celebrity) {
    res.render('celebrities/show', {
      celebrities: celebrity
    });
  }).catch(err => next(err));
});

// router.get('/add', function () {}) // /celebrities/add

module.exports = router;