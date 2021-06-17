import React from 'react';
import Card from './Card';


class List extends React.Component {
  render() {
    return (
      <div className="nowrap d-flex flex-wrap justify-content-between">
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