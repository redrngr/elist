import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bootstrap-logo.svg';

class Login extends React.Component {

  componentWillMount() {
    document.body.classList.add('text-center', 'body-signin');
  }

  render() {
    return (
      <main className="form-signin">
        <form>
          <img className="mb-4" src={logo} alt="pic" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-2 mb-1">
            <Link to="/register">Need an account?</Link>
          </p>
          <p className="text-muted">eList&copy; 2021</p>
        </form>

      </main>
    )
  }
}

export default Login;