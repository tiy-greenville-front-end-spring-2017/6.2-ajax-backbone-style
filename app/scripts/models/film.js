var Backbone = require('backbone');


// Roy Fielding: creator of REST
// Representational State Transfer
// A system to organize URLS and HTTP Methods

// GET: /films/  -> List of resources [...]
// POST: /films/ {...} -> Create a new film
// GET: /films/2/ -> A specific film {...}
// POST: /films/2/ {...} -> Update the specific film

var Film = Backbone.Model.extend({
  // idAttribute: '_id'
});

var FilmCollection = Backbone.Collection.extend({
  model: Film,
  url: 'https://swapi.co/api/films/',
  parse: function(data){
    return data.results;
  }
});


module.exports = {
  Film: Film,
  FilmCollection: FilmCollection
};
