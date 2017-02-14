var $ = require('jquery');

var movieItemTemplate = require('../templates/movie_item.hbs');
var FilmCollection = require('./models/film').FilmCollection;

var todaysMovies = new FilmCollection();

todaysMovies.on('update', function(){
  console.log(todaysMovies);
  todaysMovies.forEach(function(film){

    film.get('title');

    $('#todays-movies').append(movieItemTemplate(film.toJSON()));
  });
});

todaysMovies.fetch();
