import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient();

test('on initail render, renders the Home component', () => {
    render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /login/i})).toBeInTheDocument();
});
