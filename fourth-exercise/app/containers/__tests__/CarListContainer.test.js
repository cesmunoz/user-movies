import 'raf/polyfill';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import configureStore from '../../store'

import CardListContainer from '../CardListContainer'

const MOCK_STORE = {
  users: {},
};

describe('<CardListContainer />', () => {
  test('should render a CardListContainer correctly', async () => {
    window.fetch = jest.fn(() => Promise.resolve(({
      json: () => Promise.resolve([
        {
          name: 'John',
          movies: [],
          avatarUrl: null,
        },
      ]),
    })));

    const store = configureStore({ ...MOCK_STORE });
    render(<Provider store={store}><CardListContainer /></Provider>);

    await waitFor(() => screen.getByText('John'));

    expect(screen.getByText('John')).toBeInTheDocument();
  })
})
