import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <React.StrictMode>
     
        <App />
     
    </React.StrictMode>
  </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);


