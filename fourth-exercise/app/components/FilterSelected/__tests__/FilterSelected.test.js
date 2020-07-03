import 'raf/polyfill';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FilterSelected from '..';

describe('<FilterSelected />', () => {
  test('should render a FilterSelected correctly', async () => {
    render(<FilterSelected name="Test1" toggleFilter={() => jest.fn()} />);
    expect(screen.getByText('Test1')).toBeInTheDocument();
  })
})
