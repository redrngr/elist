import React from 'react';
import pic from '../../assets/ava.png'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={pic} width="286" height="286" alt={props.state.username} />
      <div className="card-body">
        <h5 className="card-title">{props.state.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between">
          <Link className="btn btn-outline-danger" to="#" id={props.id} onClick={props.deleteCard}>X</Link>
          <Link className="btn btn-outline-primary" to={`/employees/${props.id}`}>More</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;