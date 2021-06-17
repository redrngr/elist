import React from 'react';


class Search extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    )
  }
}

export default Search;