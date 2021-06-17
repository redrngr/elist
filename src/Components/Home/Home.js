import React from 'react';
import Header from './Header';
import List from './List';
import Nav from '../Navbar/Nav';
import './Home.css';


class Home extends React.Component {
  render() {
    return (
      <main className="main-home">
        <Nav />
        <div className="container pt-3">
          <Header />
          <List />
        </div>
      </main>
    )
  }
}

export default Home;