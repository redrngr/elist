import React from 'react';
import Header from './Header';
import List from './List';
import Nav from '../Navbar/Nav';
import './Home.css';


class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <aside>
          <Nav />
        </aside>
        <main>
          <div className="container pt-3">
            <Header />
            <List />
          </div>
        </main>
      </div>
    )
  }
}

export default Home;