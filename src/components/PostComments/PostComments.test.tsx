import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

test('should add two comments', () => {
  render(<PostComments />);

  const input = screen.getByTestId('comment-input');
  const addButton = screen.getByTestId('add-comment-button');

  fireEvent.change(input, { target: { value: 'First comment' } });
  fireEvent.click(addButton);

  fireEvent.change(input, { target: { value: 'Second comment' } });
  fireEvent.click(addButton);

  const comments = screen.getAllByTestId('comment-item');
  expect(comments).toHaveLength(2);
  expect(comments[0]).toHaveTextContent('First comment');
  expect(comments[1]).toHaveTextContent('Second comment');
});
