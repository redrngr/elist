import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './components/App';
import './assets/styles/bootstrap.min.css';
import './assets/styles/index.css';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));