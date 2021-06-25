import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './components/App';
import './assets/styles/bootstrap.min.css';
import './assets/styles/index.css';
import { store } from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));