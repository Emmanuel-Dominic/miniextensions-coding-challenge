import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { usersApi } from "../redux/store";

test('on initail render, renders the Home component', () => {
    render(<ApiProvider api={usersApi}><App /></ApiProvider>);
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /login/i})).toBeInTheDocument();
});
