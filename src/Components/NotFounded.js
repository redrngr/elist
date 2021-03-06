import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/404.css';

const NotFounded = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>
              Oops!</h1>
            <h2>
              404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link to="/employees" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                Show employee's list </Link>
              <Link to="/add" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span>
                Add new employee </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFounded;