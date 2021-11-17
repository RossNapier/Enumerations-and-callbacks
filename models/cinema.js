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

Cinema.prototype.filterByGenre = function(films, genre) {
  const result = films.filter(
    film => film.genre === genre);
    return result;
}; 

Cinema.prototype.filmsOfYear = function(films, year) {
  const result = films.find(
    film => film.year === year);
    if (result) {
      return true;
    } else {
      return false;
    }
}; 


Cinema.prototype.filmsAreLong = function(films, duration) {
  const result = films.every(
    film => film.duration > duration);
    return result
};
 
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||








module.exports = Cinema;
