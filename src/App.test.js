import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the learning page and updates progress', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /bắt đầu xây dựng website/i })).toBeInTheDocument();
  expect(screen.getByText('0/4 chủ đề')).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: /đánh dấu hoàn thành/i })[0]);
  expect(screen.getByText('1/4 chủ đề')).toBeInTheDocument();
});

test('submits the practice form', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/họ và tên/i), { target: { value: 'An' } });
  fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'an@example.com' } });
  fireEvent.click(screen.getByRole('button', { name: /gửi thông tin/i }));
  expect(screen.getByRole('status')).toHaveTextContent('Cảm ơn An');
});
