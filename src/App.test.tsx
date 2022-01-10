import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders login form', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole("textbox")).toHaveValue("");
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("button", {name: /login/i})).toBeInTheDocument();
});

test("Invalid user can't login", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole("textbox")).toHaveValue("");
  userEvent.click(screen.getByRole("button", {name: /login/i}));
  expect(screen.findByText("Invaild Credentials!")).toBeTruthy();
});

test('user can login', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  userEvent.type(screen.getByRole("textbox"), "Jenny");
  expect(screen.getByRole("textbox")).toHaveValue("Jenny");

  userEvent.click(screen.getByRole("button", {name: /login/i}));
  expect(screen.findByRole("button", {name: /logout/i})).toBeTruthy();
  // expect(getByRole("heading")).toBeInTheDocument();
});

test('user can logout', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  userEvent.type(screen.getByRole("textbox"), "Jenny");
  expect(screen.getByRole("textbox")).toHaveValue("Jenny");

  userEvent.click(screen.getByRole("button", {name: /login/i}));
  expect(screen.findByRole("button", {name: /logout/i})).toBeTruthy();
  
  // userEvent.click(screen.findByRole("button", {name: /logout/i})));
  // expect(screen.findByRole("textbox")).toBeTruthy();
  // expect(screen.findByRole("button", {name: /login/i})).toBeTruthy();
});
