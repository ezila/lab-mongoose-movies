const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js');

/* GET new movie page */
router.get('/', (req, res, next) => { // /celebrities/
  Movie.find().then(function (movies) {
    console.log('Mes films de la DB sont', movies);
    res.render('movies/index', {
      movies: movies
    });
  }).catch(err => next(err));
});

router.get('/new', function(req, res, next){
  Celebrity.find().then(function (celebrities) {
    res.render('movies/new', {
        celebrities
    });
  })
})

/* POST new movie page */
router.post('/new', function (req, res, next) {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;
  const cast = req.body.cast;

  Movie.create({
    title: title,
    genre: genre,
    plot: plot,
    cast: cast
  }).then(function (movie) {
    res.redirect('/movies');
  }).catch(function (err) {
    res.render('movies/new');
  })
})

/* GET movie details page */
router.get('/:id', (req, res, next) => { 
  Movie.findById(req.params.id).then(function (movie) {
    res.render('movies/show', {
      movies: movie
    });
  }).catch(err => next(err));
});

router.post('/:id/delete', function (req, res, next) {
  Movie.findByIdAndRemove(req.params.id).then(function (movieDelete) {
    res.redirect('/movies');
  }).catch(err => next(err));
});


module.exports = router;