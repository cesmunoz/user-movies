import 'raf/polyfill';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FieldFilterDropdown from '..';

describe('<FieldFilterDropdown />', () => {
  test('should render a FieldFilterDropdown correctly', async () => {
    render(<FieldFilterDropdown filters={['Test1', 'Test2']} toggleFilter={() => jest.fn()} />);
    expect(screen.getByText('Test1')).toBeInTheDocument();
  })
})
