import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../components/Home';
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient();

test('on login, user data and logout button is rendered', () => {
    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);
    userEvent.type(screen.getByRole("textbox"), "Leanne Graham");
    expect(screen.getByRole("textbox")).toHaveValue("Leanne Graham");

    userEvent.click(screen.getByRole("button", {name: /login/i}));
    expect(screen.getByRole("button", {name: /logout/i})).toBeInTheDocument();
    // expect(screen.findByRole("heading")).not.toBeInTheDocument();
});

test('on login without value, logout button is rendered with no user data', () => {
    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);
    expect(screen.getByRole("textbox")).toHaveValue("");
    userEvent.click(screen.getByRole("button", {name: /login/i}));
    expect(screen.getByRole("button", {name: /logout/i})).toBeInTheDocument();
});

test('on logout, login is rendered', () => {
  render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);
    userEvent.type(screen.getByRole("textbox"), "Leanne Graham");
    expect(screen.getByRole("textbox")).toHaveValue("Leanne Graham");

    userEvent.click(screen.getByRole("button", {name: /login/i}));
    expect(screen.getByRole("button", {name: /logout/i})).toBeInTheDocument();
    
    userEvent.click(screen.getByRole("button", {name: /logout/i}));
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /login/i})).toBeInTheDocument();
});
