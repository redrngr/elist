import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bootstrap-logo.svg';

class Register extends React.Component {

  componentWillMount() {
    document.body.classList.add('text-center', 'body-signin');
  }

  render() {
    return (
      <main className="form-signin">
        <form>
          <img className="mb-4" src={logo} alt="pic" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="Username" maxlength="30" />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <p className="mt-2 mb-1">
            <Link to="/register">Have an account?</Link>
          </p>
          <p className="text-muted">eList&copy; 2021</p>
        </form>
      </main>
    )
  }
}

export default Register;