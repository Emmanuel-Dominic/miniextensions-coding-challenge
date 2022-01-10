import React from 'react';
import Home from './features/home/Home';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./app/store";


const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
    );
}

export default App;
