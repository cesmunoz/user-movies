const shouldReturnEmptyIfMovieIsUndefined = () => expect(matchMoviesWithSubtitles()).toEqual([]);
const shouldReturnEmptyIfMovieIsNull = () => expect(matchMoviesWithSubtitles(null)).toEqual([]);
const shouldReturnSingleMovieWithoutSubsEmptySubs = () => {
  const listBefore = [
    {
      id: 1,
      name: 'Titanic',
    },
  ];

  const listAfter = [
    {
      id: 1,
      name: 'Titanic',
      availableSubtitles: [],
    },
  ];
  expect(matchMoviesWithSubtitles(listBefore)).toEqual(listAfter);
};

const shouldReturnSingleMovieWithoutSubsWithSubs = () => {
  const movies = [
    {
      id: 1,
      name: 'Titanic',
    },
  ];

  const subtitles = [
    {
      id: 4,
      movieId: 3,
      language: 'EN',
      file: 'subtitleFile',
    },
  ];

  const listAfter = [
    {
      id: 1,
      name: 'Titanic',
      availableSubtitles: [],
    },
  ];

  expect(matchMoviesWithSubtitles(movies, subtitles)).toEqual(listAfter);
};

const shouldReturnSingleMovieWithSubs = () => {
  const movies = [
    {
      id: 1,
      name: 'Titanic',
    },
  ];

  const subtitles = [
    {
      id: 1,
      movieId: 1,
      language: 'RU',
      file: 'subtitleFile',
    },
  ];

  const listAfter = [
    {
      id: 1,
      name: 'Titanic',
      availableSubtitles: [
        {
          id: 1,
          movieId: 1,
          language: 'RU',
          file: 'subtitleFile',
          encodedFile: 'subtitleFileKOI-7',
        },
      ],
    },
  ];

  expect(matchMoviesWithSubtitles(movies, subtitles)).toEqual(listAfter);
};

const shouldReturnMoviesWithoutSubs = () => {
  const movies = [
    {
      id: 1,
      name: 'Titanic',
    },
    {
      id: 2,
      name: 'Finding Nemo',
    },
  ];

  const subtitles = [
    {
      id: 1,
      movieId: 3,
      language: 'RU',
      file: 'subtitleFile',
    },
  ];

  const listAfter = [
    {
      id: 1,
      name: 'Titanic',
      availableSubtitles: [],
    },
    {
      id: 2,
      name: 'Finding Nemo',
      availableSubtitles: [],
    },
  ];

  expect(matchMoviesWithSubtitles(movies, subtitles)).toEqual(listAfter);
};

const shouldReturnMoviesWithSubs = () => {
  const movies = [
    {
      id: 1,
      name: 'Titanic',
    },
    {
      id: 2,
      name: 'Finding Nemo',
    },
  ];

  const subtitles = [
    {
      id: 1,
      movieId: 1,
      language: 'RU',
      file: 'subtitleFile',
    },
    {
      id: 2,
      movieId: 2,
      language: 'EN',
      file: 'subtitleFile',
    },
  ];

  const listAfter = [
    {
      id: 1,
      name: 'Titanic',
      availableSubtitles: [
        {
          id: 1,
          movieId: 1,
          language: 'RU',
          file: 'subtitleFile',
          encodedFile: 'subtitleFileKOI-7',
        },
      ],
    },
    {
      id: 2,
      name: 'Finding Nemo',
      availableSubtitles: [
        {
          id: 2,
          movieId: 2,
          language: 'EN',
          file: 'subtitleFile',
          encodedFile: 'subtitleFileUTF-8',
        },
      ],
    },
  ];

  expect(matchMoviesWithSubtitles(movies, subtitles)).toEqual(listAfter);
};

shouldReturnEmptyIfMovieIsUndefined();
shouldReturnEmptyIfMovieIsNull();
shouldReturnSingleMovieWithoutSubsEmptySubs();
shouldReturnSingleMovieWithoutSubsWithSubs();
shouldReturnSingleMovieWithSubs();
shouldReturnMoviesWithoutSubs();
shouldReturnMoviesWithSubs();
console.log('All tests passed');
