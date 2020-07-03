import 'raf/polyfill';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FieldsSelector from '..';

describe('<FieldsSelector />', () => {
  test('should render a FieldsSelector correctly', async () => {
    render(<FieldsSelector selectedFilters={['Test1']} unselectedFilters={['Test2']} toggleFilter={() => jest.fn()} />);
    expect(screen.getByText('Test1')).toBeInTheDocument();
  })
})
