import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
  }

  handleClick = () => {
    const currentState = this.state.isToggle;
    this.setState(state => ({ isToggle: !currentState }));
  }

  render() {
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
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16"><use href="#grid" /></svg>
              Employees
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use href="#people-circle" /></svg>
              Add employee
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use href="#table" /></svg>
              Orders
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use href="#people-circle" /></svg>
              Customers
            </Link>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded={this.state.isToggle}
            onClick={this.handleClick}>
            <strong>Admin</strong>
          </Link>
          {(this.state.isToggle) ? <DropMenu onOutside={() => this.setState({ isToggle: false })} /> : null}
        </div>
      </nav>
    )
  }
}

class DropMenu extends React.Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onOutside();
    }
  }

  render() {
    return (
      <ul
        className="dropdown-menu dropdown-menu-dark text-small shadow show"
        aria-labelledby="dropdownUser1"
        style={{ position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(0px, -33.65px)" }}
        data-popper-placement="top-start"
        ref={this.setWrapperRef}
      >
        <li><Link className="dropdown-item" to="/">New project...</Link></li>
        <li><Link className="dropdown-item" to="/">Settings</Link></li>
        <li><Link className="dropdown-item" to="/">Profile</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="/">Sign out</Link></li>
      </ul>
    )
  }
}


export default Nav;