const getKey = (data, property) => typeof property === 'string' ? data[property] : property(data);

export const addListToEntities = (data, property) => data.reduce((newState, item) => {
  const key = getKey(item, property);
  return {
    ...newState,
    [key]: {
      ...item,
    },
  };
}, {});

export const mergeEntity = (state, data, property) => {
  const key = getKey(data, property);
  return {
    ...state,
    [key]: {
      ...state[key],
      ...data,
    },
  };
};
