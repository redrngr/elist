import React from 'react';
import Card from './Card';


const List = (props) => {
  return (
    <div className="nowrap d-flex flex-wrap justify-content-between">
      {props.store.map((em, id) => <Card key={id} state={em} />)}
    </div>
  )
}

export default List;