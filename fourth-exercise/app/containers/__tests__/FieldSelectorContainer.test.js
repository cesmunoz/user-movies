import 'raf/polyfill';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import configureStore from '../../store'

import FieldSelectorContainer from '../FieldSelectorContainer'

const MOCK_STORE = {
  filters: {
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
  },
};

describe('<FieldSelectorContainer />', () => {
  test('should render a FieldSelectorContainer correctly', async () => {
    const store = configureStore({ ...MOCK_STORE });
    render(<Provider store={store}><FieldSelectorContainer /></Provider>);
    expect(screen.getByText('Actors')).toBeInTheDocument();
  })
})
