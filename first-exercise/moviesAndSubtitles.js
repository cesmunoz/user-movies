/*
  Given a list of movies and a list of subtitles, 
  return a list of movies with an additional 'availableSubtitles' property 
  that should list all of those subtitles that belong to that movie
  (each subtitle has a 'movieId' property that we will use to match with the movie).
  
  Additionally, we need to encode the subtitle file, as the encoding depends on the language
  of the subtitle.

  Params:
    - movies: Array of Movies
    - subtitles: Array of Subtitles

  Returns: 
    - Array of Movies (each Movie should include in it's props an availableSubtitles array of subtitles)
*/
function matchMoviesWithSubtitles(movies, subtitles) {
  if (typeof movies !== undefined) {
    for (var i = 0; i < movies.length; i++) {
      var availableSubtitles = [];

      if (typeof subtitles !== undefined) {
        for (var j = 0; j < subtitles.length; j++) {
          if (subtitles[j].language === 'RU') {
            subtitles[j].encodedFile = encodeFile(subtitles[j].file, 'KOI-7');
          } else if (subtitles[j].language === 'CH') {
            subtitles[j].encodedFile = encodeFile(subtitles[j].file, 'GBK');
          } else if (subtitles[j].language === 'HW') {
            subtitles[j].encodedFile = encodeFile(subtitles[j].file, 'Windows-1251');
          } else {
            subtitles[j].encodedFile = encodeFile(subtitles[j].file, 'UTF-8');
          }

          if (subtitles[j].movieId === movies[i].id) {
            availableSubtitles.push(subtitles[j]);
          }
        }
      }

      movies[i].availableSubtitles = availableSubtitles;
    }

    return movies;
  }
}

/*
  Dummy function
*/
function encodeFile(file, encoding) {
  return file + encoding;
}