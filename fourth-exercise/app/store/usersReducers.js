import { addListToEntities } from '../utils/parseListEntities';
import { getUsers } from '../api/users';
import { loadMovies } from './moviesReducer';
import { getMovies } from '../api/movies';

export const GET_USERS_SUCCESS = '@users/GET_USERS_SUCCESS';

export const loadUsers = val => ({ type: GET_USERS_SUCCESS, payload: val });

export const fetchUsers = () => (dispatch) => {
  getUsers().then((users) => {
    dispatch(loadUsers(users));

    const ids = users.reduce((list, { movies }) => list.concat(movies), [])
    getMovies(ids).then((movies) => {
      dispatch(loadMovies(movies))
    })
  });
}

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return addListToEntities(action.payload, 'name');
    default:
      return state;
  }
};

export default moviesReducer
