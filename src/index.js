import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app'),
)