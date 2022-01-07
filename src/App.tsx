import React from 'react';
import './App.css';
import Home from "./components/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
      <ReactQueryDevtools />
    </QueryClientProvider>
    );
}

export default App;
