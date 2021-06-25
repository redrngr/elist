import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Welcome from './Home/Welcome';
import List from './Home/List';
import Nav from './Navbar/Nav';
import Add from './Add';
import NotFounded from './NotFounded';
import Employee from './Home/Employee/Employee';
import '../assets/ava.svg';
import '../assets/styles/Home.css';

const mapStateToProps = (state) => {
  return {
    appLoaded: state.common.appLoaded,
    currentUser: state.common.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return;
}

const App = (state) => {
  return (
    <div className="home">
      <aside>
        <Nav />
      </aside>
      <main>
        <div className="container pt-3">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/employees" render={() => <List {...state} />} />
            <Route path="/employees/:id" render={(props) => <Employee {...props} state={state} />} />
            <Route path="/add" component={Add} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFounded} />
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);