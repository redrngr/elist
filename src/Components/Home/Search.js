import React from 'react';


class Search extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <form className="d-flex">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    )
  }
}

export default Search;