import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Welcome from './Home/Welcome';
import List from './Home/List';
import Nav from './Navbar/Nav';
import Add from './Add';
import NotFounded from './NotFounded';
import Employee from './Home/Employee';
import '../assets/ava.svg';
import '../assets/styles/List.css';

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <aside>
          <Nav />
        </aside>
        <main>
          <div className="container pt-3">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/employees" component={List} />
              <Route path="/employees/:id" component={Employee} />
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
}

export default App;