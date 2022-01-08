import React from 'react';
import './App.css';
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
    );
}

export default App;
