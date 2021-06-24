import React from 'react';
import Header from './Header';
import List from './List';
import Employee from './Employee/Employee';
import NotFounded from '../NotFounded';
import { Route, Switch } from 'react-router-dom';
import '../../assets/ava.svg';
import '../../assets/styles/Home.css';


const Home = (state) => {
  return (
    <div className="container pt-3">
      <Header />
      <Switch>
        <Route exact path='/employees' render={() => <List {...state} />} />
        <Route path='/employees/:id' render={(props) => <Employee {...props} state={state} />} />
        <Route path='/add' render={() => <Employee />} />
        <Route component={NotFounded} />
      </Switch>
    </div>
  )
}

export default Home;