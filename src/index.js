import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Data from './b/data2.json';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let default1 = Data

function reducer(state=default1, action) {
  if (action.type === 'add') {
    let records = [state.defaults];
    records[0].startDate = action.payload
    state.records = records
    // copy.defaults.startDate = action.payload
    console.log('records: ', records)
    return state
  }
  return state
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
