const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getFilmTitles = function(films) {
  const result = films.map((film) => {
    return film.title
  }); 
  return result;
}; 

Cinema.prototype.findFilmByTitle = function(films, title) {
  const result = films.find(film => film.title === title);
  return result;
}; 

module.exports = Cinema;
