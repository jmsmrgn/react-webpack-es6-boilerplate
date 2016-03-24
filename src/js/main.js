import '../styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import App from './components/App';
import NotFoundView from './views/NotFoundView';

const rootElement = document.getElementById('app');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="404" component={NotFoundView} />
      <Redirect from="*" to="404" />
    </Route>
  </Router>
);

// Render the React application to the DOM
ReactDOM.render(routes, rootElement);
