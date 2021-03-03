import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MainContainer } from './containers';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);