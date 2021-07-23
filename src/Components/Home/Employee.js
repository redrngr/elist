import React from 'react';
import { connect } from 'react-redux';
import pic from '../../assets/ava.png'
import '../../assets/styles/Employee.css';
import Loader from '../Loader';
import { getEmployee, deleteCard } from '../../reducers/card-reducer';

const mapStateToProps = (state) => ({
  employee: state.card.employee,
  states: state.add.states
});

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
    this.id = +this.props.match.params.id;
    this.employee = this.props.employee;
  }

  componentDidMount() {
    this.props.getEmployee(this.id);
  }

  handleToggle = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  handleClick = () => {
    this.props.deleteCard(this.id);
    this.props.history.push('/employees');
  }

  render() {
    if (!this.employee) return <Loader message="Loading..." />;
    return (
      <div className="employee mb-5 p-3" style={{ width: "100%" }}>
        <div className="d-flex flex-column">
          <img className="card-img-top" src={pic} alt="Pic" />
        </div>
        <div className="ms-3">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" value={this.employee.email} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputTelephone" className="form-label">Telephone number</label>
              <input type="tel" className="form-control" id="inputTelephone" value={this.employee.phone} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value={this.employee.name} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" value={this.employee.username} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-12">
              <label htmlFor="website" className="form-label">Website</label>
              <input type="text" className="form-control" id="website" value={this.employee.website} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" value={this.employee.address.suite} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Street</label>
              <input type="text" className="form-control" id="inputAddress2" value={this.employee.address.street} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" value={this.employee.address.city} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" disabled={!this.state.editMode} readOnly={!this.state.editMode}>
                <option defaultValue="selected">{this.employee.address.state || 'Choose...'}</option>
                {this.props.states.map((el, id) => <option key={id}>{el.name}</option>)}
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" value={this.employee.address.zipcode} disabled={!this.state.editMode} readOnly={!this.state.editMode} />
            </div>
            <div className="d-flex justify-content-between mt-3 mb-3">
              <div className="btn btn-danger" onClick={this.handleClick}>Delete employee</div>
              {
                this.state.editMode ?
                  <button type="submit" className="btn btn-success ms-3">Save changes</button>
                  : <div className="btn btn-primary" onClick={this.handleToggle}>Edit profile</div>
              }
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { getEmployee, deleteCard })(Employee);