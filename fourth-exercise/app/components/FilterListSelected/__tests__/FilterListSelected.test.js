import 'raf/polyfill';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FilterListSelected from '..';

describe('<FilterListSelected />', () => {
  test('should render a FilterListSelected correctly', async () => {
    render(<FilterListSelected filters={['Test1']} toggleFilter={() => jest.fn()} />);
    expect(screen.getByText('Test1')).toBeInTheDocument();
  })
})
