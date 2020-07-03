import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import usersReducer from './usersReducers';
import filtersReducer from './filterReducers';

export default combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  filters: filtersReducer,
});
