import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './assets/styles/bootstrap.min.css';
import './assets/styles/index.css';
import store from './store';

ReactDOM.render((
  <Router>
    <Route path="/" render={() => <App store={store.employeesList} />} />
  </Router>
), document.getElementById('root'));