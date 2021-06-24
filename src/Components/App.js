import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home/Home';
import Nav from './Navbar/Nav';


const App = (props) => {
  return (
    <div className="home">
      <aside>
        <Nav />
      </aside>
      <main>
        <Switch>
          <Route exact path="/home" render={() => <Home state={props} />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>
    </div>
  )
}

export default App;