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
const subtitleEncodedList = {
  RU: 'KOI-7',
  CH: 'GBK',
  HW: 'Windows-1251',
};

const isNullOrUndefined = (item) => item === undefined || item === null;
const getEnconding = (language) =>
  subtitleEncodedList[language] !== undefined ? subtitleEncodedList[language] : 'UTF-8';

const matchMoviesWithSubtitles = (movies, subtitles) =>
  isNullOrUndefined(movies)
    ? []
    : movies.map((movie) => ({
      ...movie,
      availableSubtitles: isNullOrUndefined(subtitles)
        ? []
        : getAvailableSubtitles(movie.id, subtitles),
    }));

const getAvailableSubtitles = (movieId, subtitles) =>
  subtitles
    .filter((subtitle) => subtitle.movieId === movieId)
    .map((subtitle) => ({
      ...subtitle,
      encodedFile: encodeFile(subtitle.file, getEnconding(subtitle.language)),
    }));

/*
  Dummy function
*/
const encodeFile = (file, encoding) => file + encoding;
