import React from 'react';
import pic from './pic.jpg'

class Card extends React.Component {
  render() {
    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={pic} className="card-img-top" alt="Pic" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default Card;