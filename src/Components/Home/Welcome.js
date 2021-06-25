import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/404.css';

const Welcome = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Welcome!</h1>
            <h2>See, edit and add information about employees</h2>
            <div className="error-details">
              Dolor ipsum do voluptate do amet sit ut qui do reprehenderit officia. Reprehenderit do proident velit esse cupidatat exercitation sint in. Ad aliquip culpa magna culpa amet ipsum aliquip. Sunt anim ipsum ipsum dolore nulla id veniam do enim. Eu ea est velit qui fugiat labore ex. Eu Lorem non officia minim anim do aliquip laborum id proident. Irure id magna ad ex qui aliquip et ex.
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

export default Welcome;