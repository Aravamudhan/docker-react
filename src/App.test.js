import { render, screen } from '@testing-library/react';
import App from './App';

test('renders doc link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Links to the docs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders instruction', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning Docker deployments/i);
  expect(linkElement).toBeInTheDocument();
});
