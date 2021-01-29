import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import {
  BrowserRouter
} from "react-browser-router";

import configureStore from './store'

const store = configureStore();


render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)