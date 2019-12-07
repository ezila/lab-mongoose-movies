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

/* GET new celebrity page */
router.get('/new', (req, res, next) => { // /celebrities/new
  res.render('celebrities/new');
});

/* POST new celebrity page */
router.post('/new', function (req, res, next) {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;

  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  }).then(function (celebrity) {
    res.redirect('/celebrities');
  }).catch(function (err) {
    res.render('celebrities/new');
  })
})

/* GET celebrities details page */
router.get('/:id', (req, res, next) => { // /celebrities/:id
  Celebrity.findById(req.params.id).then(function (celebrity) {
    res.render('celebrities/show', {
      celebrities: celebrity
    });
  }).catch(err => next(err));
});

/* POST delete celebrity */
router.post('/:id/delete', function (req, res, next) {
  Celebrity.findByIdAndRemove(req.params.id).then(function (celebrityDelete) {
    res.redirect('/celebrities');
  }).catch(err => next(err));
});

/* GET edit celebrity */
// router.get('/:id/', (req, res, next) => {
//   const id = req.query.celebrities_id;
//   Celebrity.findById(id).then(function (celebrity) {
//     res.render("edit", {
//       celebrities: celebrity
//     });
//   }).catch(err => next(err));
// });

// router.post('/:id/edit', function (req, res, next) {
//   Celebrity.update({_id: req.query.celebrities_id}, {$set: {
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchPhrase: req.body.catchPhrase
//   }}).then(function () {
//     res.redirect()
//   })
// })


module.exports = router;