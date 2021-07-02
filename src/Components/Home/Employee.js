import React from 'react';
import { connect } from 'react-redux';
import pic from '../../assets/ava.png'
import '../../assets/styles/Employee.css';
import Loader from '../Loader';
import { Link } from 'react-router-dom';
import { getEmployee, deleteCard } from '../../reducers/card-reducer';

const mapStateToProps = (state) => ({
  employee: state.card.employee
});

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.id = +this.props.match.params.id;
  }

  componentDidMount() {
    this.props.getEmployee(this.id);
  }

  handleClick = () => {
    this.props.deleteCard(this.id);
    this.props.history.push('/employees');
  }

  render() {
    if (!this.props.employee) return <Loader />;
    return (
      <div className="employee mb-5 p-3" style={{ width: "100%" }}>
        <div className="d-flex flex-column">
          <img className="card-img-top" src={pic} alt="Pic" />
        </div>
        <div className="ms-3">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" value={this.props.employee.email} disabled={true} readOnly={true} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputTelephone" className="form-label">Telephone number</label>
              <input type="tel" className="form-control" id="inputTelephone" value={this.props.employee.phone} disabled={true} readOnly={true} />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value={this.props.employee.name} disabled={true} readOnly={true} />
            </div>
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" value={this.props.employee.username} disabled={true} readOnly={true} />
            </div>
            <div className="col-12">
              <label htmlFor="website" className="form-label">Website</label>
              <input type="text" className="form-control" id="website" value={this.props.employee.website} disabled={true} readOnly={true} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" value={this.props.employee.address.suite} disabled={true} readOnly={true} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Street</label>
              <input type="text" className="form-control" id="inputAddress2" value={this.props.employee.address.street} disabled={true} readOnly={true} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" value={this.props.employee.address.city} disabled={true} readOnly={true} />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" disabled={true} readOnly={true}>
                <option defaultValue="selected">Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" value={this.props.employee.address.zipcode} disabled={true} readOnly={true} />
            </div>
            <div className="d-flex justify-content-between mt-3 mb-3">
              <Link className="btn btn-danger" to="#" onClick={this.handleClick}>Delete employee</Link>
              <button type="submit" className="btn btn-primary ms-3">Edit profile</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { getEmployee, deleteCard })(Employee);