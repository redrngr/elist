import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DropMenu from './DropMenu';

class Nav extends React.Component {
  handleClick = () => {
    this.props.onToggle()
  }

  render() {
    if (true) { //add logic
      return (
        <nav className="d-flex flex-column p-3 pb-4 text-white bg-dark">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap" /></svg>
            <span className="fs-4">eList</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink to="/employees" className="nav-link text-white" aria-current="page" activeClassName="active">
                <svg className="bi me-2" width="16" height="16"><use href="#grid" /></svg>
                Employees
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" className="nav-link text-white" activeClassName="active">
                <svg className="bi me-2" width="16" height="16"><use href="#people-circle" /></svg>
                Add employee
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <Link
              to="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded={this.props.isToggle}
              onClick={this.handleClick}>
              <strong>Admin</strong>
            </Link>
            {this.props.isToggle ? <DropMenu onOutside={this.props.onToggle} /> : null}
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="d-flex flex-column p-3 pb-4 text-white bg-dark">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap" /></svg>
            <span className="fs-4">eList</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
          </ul>
          <hr />
          <div className="dropdown">
          </div>
        </nav>
      )
    }
  }
}

export default Nav;