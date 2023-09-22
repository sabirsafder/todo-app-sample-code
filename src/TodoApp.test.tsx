import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './components/TodoApp';

test('renders Todo App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todo App/i);
  expect(titleElement).toBeInTheDocument();
});

test('adds a task', () => {
  render(<App />);
  const taskInput = screen.getByTestId('task-input');
  const addButton = screen.getByTestId('add-button');

  fireEvent.change(taskInput, { target: { value: 'Buy milk' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Buy milk')).toBeInTheDocument();
});
