import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  states: state.add.states
});

const Add = (props) => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="mail@example.com" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputTelephone" className="form-label">Telephone number</label>
        <input type="tel" className="form-control" id="inputTelephone" placeholder="+7(495)937-99-92" />
      </div>
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Uti Putin" />
      </div>
      <div className="col-md-6">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" placeholder="shishka1999" />
      </div>
      <div className="col-12">
        <label htmlFor="website" className="form-label">Website</label>
        <input type="text" className="form-control" id="website" placeholder="example.com" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" placeholder="Samara" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select">
          <option defaultValue="selected">Choose...</option>
          {props.states.map((el, id) => <option key={id}>{el.name}</option>)}
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" placeholder="59590-4157" />
      </div>
      <div className="col-12 text-end">
        <button type="submit" className="btn btn-success">Add employee</button>
      </div>
    </form>
  )
}

export default connect(mapStateToProps, null)(Add);