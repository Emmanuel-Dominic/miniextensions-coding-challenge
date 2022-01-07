import React from 'react';
import './App.css';
import Home from "./components/Home";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { usersApi } from "./redux/store";


const App = () => {
  return (
    <ApiProvider api={usersApi}>
      <Home/>
    </ApiProvider>
    );
}

export default App;
