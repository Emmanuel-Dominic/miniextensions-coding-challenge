import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./state/index";

test('deposit', () => {
  render(<Provider store={store}><App /></Provider>);
  const amount = screen.getByRole("heading");
  expect(amount).toHaveTextContent("0");

  const depositButton = screen.getByText(/Deposit/i);
  fireEvent.click(depositButton);
  expect(amount).toHaveTextContent("1000");
});

test('withdraw', () => {
  render(<Provider store={store}><App /></Provider>);
  const amount = screen.getByRole("heading");
  expect(amount).toHaveTextContent("1000");

  const withdrawButton = screen.getByText(/Withdraw/i);
  fireEvent.click(withdrawButton);
  expect(amount).toHaveTextContent("0");
});

test('bankrupt', () => {
  render(<Provider store={store}><App /></Provider>);
  const amount = screen.getByRole("heading");
  expect(amount).toHaveTextContent("0");

  const bankruptButton = screen.getByText(/Bankrupt/i);
  fireEvent.click(bankruptButton);
  expect(amount).toHaveTextContent("0");
});