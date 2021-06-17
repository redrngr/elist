import React from 'react';
import Card from './Card';


class List extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default List;