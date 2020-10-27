import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import state from "./redux/store";

test('renders learn react link', () => {
  const { getByText } = render(<App state={state}/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
