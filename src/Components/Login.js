import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AUTH_FIELD_CHANGE, LOGIN } from '../actiontypes';
import logo from '../assets/bootstrap-logo.svg';
import { Form, Field } from 'react-final-form';

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = dispatch => ({
  onEmailChange: value => dispatch({ type: AUTH_FIELD_CHANGE, key: 'email', value }),
  onPasswordChange: value => dispatch({ type: AUTH_FIELD_CHANGE, key: 'password', value }),
  onSubmit: payload => dispatch({ type: LOGIN, payload })
})

class Login extends React.Component {
  componentDidMount() {
    document.querySelector('main').style.textAlign = "center";
  }

  componentWillUnmount() {
    document.querySelector('main').style.textAlign = "";
  }


  emailChange = event => this.props.onEmailChange(event.target.value);
  passwordChange = event => this.props.onPasswordChange(event.target.value);
  submitForm = (email, password) => event => {
    event.preventDefault();
    axios.post('https://my-json-server.typicode.com/redrngr/api/users/login', { user: { email, password } })
      .then(res => this.props.onSubmit(res.data))
  }

  render() {
    return (
      <main className="form-signin">
        <Form
          onSubmit={this.onSubmit}
          render={() => (<form onSubmit={this.submitForm(this.props.email, this.props.password)}>
            <img className="mb-4" src={logo} alt="pic" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <Field type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={this.props.email} component={"input"} />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <Field type="password" class="form-control" id="floatingPassword" placeholder="Password" value={this.props.password} component={"input"} />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <Field type="checkbox" value="remember-me" component={"input"} /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-2 mb-1">
              <Link to="/register">Need an account?</Link>
            </p>
            <p className="text-muted">eList&copy; 2021</p>
          </form>)}
        />
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);