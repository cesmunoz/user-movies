import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Card from '..';

describe('<Card />', () => {
  test('should render a card correctly', async () => {
    render(<Card title="MyTitle" avatar=""><div>MyTest</div></Card>);
    expect(screen.getByText('MyTitle')).toBeInTheDocument();
  });

  test('should render a card with children', async () => {
    render(<Card title="MyTitle" avatar="">Filter</Card>);
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });
})
