import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { addEmployee } from "../reducers/add-reducer";
import Loader from "./Loader";

const mapStateToProps = state => ({
  states: state.add.states,
  addStatus: state.add.addStatus
});

const required = value => (value ? undefined : 'Required');
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const onSubmit = values => addEmployee(values);

const Add = (props) => {
  return (
    <Form
      initialValues={{
        id: Date.now(),
        email: null,
        phone: null,
        name: null,
        username: null,
        website: null,
        suite: null,
        street: null,
        city: null,
        state: null,
        zipcode: null
      }}
      onSubmit={props.onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="inputEmail4" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide an email.</span>) || "Email"}
                  </label>
                  <input {...input} className="form-control" type="email" placeholder="mail@example.com" id="inputEmail4" />
                </>
              )}
            </Field>
          </div>
          {console.log(submitting)}
          <div className="col-md-6">
            <Field name="phone" validate={composeValidators(required, mustBeNumber)}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="inputTelephone" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide an telephone number.</span>) || "Telephone number"}
                  </label>
                  <input {...input} className="form-control" type="tel" placeholder="+7(495)937-99-92" id="inputTelephone" />
                </>
              )}
            </Field>
          </div>
          <div className="col-md-6">
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="name" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide the name.</span>) || "Name"}
                  </label>
                  <input {...input} className="form-control" type="text" placeholder="Uti Putin" id="name" />
                </>
              )}
            </Field>
          </div>
          <div className="col-md-6">
            <Field name="username" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="username" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide a username.</span>) || "Username"}
                  </label>
                  <input {...input} className="form-control" type="text" placeholder="shishka1999" id="username" />
                </>
              )}
            </Field>
          </div>
          <div className="col-12">
            <Field name="website" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="website" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide a website.</span>) || "Website"}
                  </label>
                  <input {...input} className="form-control" type="text" placeholder="example.com" id="website" />
                </>
              )}
            </Field>
          </div>
          <div className="col-12">
            <Field name="suite" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="inputAddress" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide an address.</span>) || "Address"}
                  </label>
                  <input {...input} className="form-control" type="text" placeholder="1234 Main St" id="inputAddress" />
                </>
              )}
            </Field>
          </div>
          <div className="col-12">
            <Field name="street" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="inputAddress2" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide the street.</span>) || "Street"}
                  </label>
                  <input {...input} className="form-control" type="text" placeholder="Apartment, studio, or floor" id="inputAddress2" />
                </>
              )}
            </Field>
          </div>
          <div className="col-md-6">
            <Field name="city" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="inputCity" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide the city.</span>) || "City"}
                  </label>
                  <input {...input} className="form-control" type="text" placeholder="Samara" id="inputCity" />
                </>
              )}
            </Field>
          </div>
          <div className="col-md-4">
            <Field name="state" component="select" validate={required}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="inputState" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Please provide a valid state.</span>) || "State"}
                  </label>
                  <select {...input} className="form-select" id="inputState">
                    <option defaultValue="selected">Choose...</option>
                    {props.states.map((el, id) => <option key={id}>{el.name}</option>)}
                  </select>
                </>
              )}
            </Field>
          </div>
          <div className="col-md-2">
            <Field name="zipcode" validate={composeValidators(required, mustBeNumber)}>
              {({ input, meta }) => (
                <>
                  <label htmlFor="inputZip" className="form-label ps-3">
                    {(meta.error && meta.touched && <span className="invalid">Enter a zipcode.</span>) || "Zip"}
                  </label>
                  <input {...input} className="form-control" type="text" placeholder="59590-4157" id="inputZip" />
                </>
              )}
            </Field>
          </div>
          <div className="col-12 text-end">
            <button type="button" className="btn btn-secondary me-2" onClick={form.reset} disabled={submitting || pristine}>Reset</button>
            <button type="submit" className="btn btn-success" disabled={submitting}>Add employee</button>
            {!submitting || <Loader message="Sending..." />}
          </div>
        </form>
      )}
    />
  )
}

export default connect(mapStateToProps, { onSubmit })(Add);