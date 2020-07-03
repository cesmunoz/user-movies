import { mergeEntity } from '../utils/parseListEntities';

const initialState = {
  Actors: {
    name: 'Actors',
    selected: false,
  },
  Directors: {
    name: 'Directors',
    selected: false,
  },
  Writers: {
    name: 'Writers',
    selected: false,
  },
  Movies: {
    name: 'Movies',
    selected: false,
  },
}

export const TOGGLE_FILTER = '@filters/TOGGLE_FILTERS';

export const replaceFilter = val => ({ type: TOGGLE_FILTER, payload: val });

export const toggleFilter = key => (dispatch, getState) => {
  const { filters } = getState();
  const filter = filters[key];
  const filtered = { ...filter, selected: !filter.selected };
  dispatch(replaceFilter(filtered));
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return mergeEntity(state, action.payload, 'name')
    default:
      return state;
  }
};

export default filtersReducer
