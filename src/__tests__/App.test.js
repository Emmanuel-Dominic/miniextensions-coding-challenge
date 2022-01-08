import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from "react-redux";
import { store } from "./../redux/store";

test('on initail render, renders the Home component', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /login/i})).toBeInTheDocument();
});
