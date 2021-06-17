import React from 'react';
import Search from './Search';
import Filters from './Filters';


class Header extends React.Component {
  render() {
    return (
      <>
        <Search />
        <Filters />
      </>
    )
  }
}

export default Header;