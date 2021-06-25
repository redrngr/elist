import React from 'react';
import pic from '../../assets/ava.png'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="card mb-5" style={{ width: "18rem" }}>
      <img className="card-img-top" src={pic} alt={props.state.username} />
      <div className="card-body">
        <h5 className="card-title">{props.state.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        {/* <a href={`http://${props.state.website}`} className="btn btn-primary" target="_blank" rel="noreferrer noopener">{props.state.website}</a> */}
        <Link className="btn btn-primary" to={`/employees/${props.state.id}`}>More</Link>
      </div>
    </div>
  )
}

export default Card;