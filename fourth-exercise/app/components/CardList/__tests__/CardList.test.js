import 'raf/polyfill';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import CardList from '..';

describe('<CardList />', () => {
  test('should render a cardList correctly', async () => {
    const users = [
      {
        name: 'John', 
        properties: [],
      },
    ]
    render(<CardList users={users} />);
    expect(screen.getByText('John')).toBeInTheDocument();
  })
})
