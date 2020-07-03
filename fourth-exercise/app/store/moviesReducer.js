import { addListToEntities } from '../utils/parseListEntities';
import { getMovies } from '../api/movies';

export const GET_MOVIES_SUCCESS = '@movies/GET_MOVIES_SUCCESS';

export const loadMovies = val => ({ type: GET_MOVIES_SUCCESS, payload: val });

export const fetchMovies = () => dispatch => getMovies().then(movie => dispatch(loadMovies(movie)));

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return addListToEntities(action.payload, 'imdbID');
    default:
      return state;
  }
};

export default moviesReducer
