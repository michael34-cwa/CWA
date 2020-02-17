import React from 'react'
import PropTypes from 'prop-types' 
 
const displayName = 'CategoryFrom'
const propTypes = {
  category: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ category, errors, onChange, onSubmit }) => {
   
  function handleChange(name, value) { 
    if (value !== category[name]) {
      onChange(name, value)
    }
  }
  
  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="form-group row">
        <label htmlFor="first_name" className="col-md-12 col-form-label">
          First Name
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="first_name"
            name="first_name"
            className={`form-control ${errors.has("first_name") && "is-invalid"}`}
            placeholder="First Name"
            value={category.first_name || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("first_name") && (
            <div className="invalid-feedback">{errors.first("first_name")}</div>
          )}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="last_name" className="col-md-12 col-form-label">
          Last Name
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="last_name"
            name="last_name"
            className={`form-control ${errors.has("last_name") && "is-invalid"}`}
            placeholder="Last Name"
            value={category.last_name || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("last_name") && (
            <div className="invalid-feedback">{errors.first("last_name")}</div>
          )}
        </div>
      </div>



      <div className="form-group row">
        <label htmlFor="email" className="col-md-12 col-form-label">
          Email
        </label>
        <div className="col-md-12">
          <input
            type="email"
            id="email"
            name="email"
            disabled
            className={`form-control ${errors.has("email") && "is-invalid"}`}
            placeholder="Email"
            value={category.email || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("email") && (
            <div className="invalid-feedback">{errors.first("email")}</div>
          )}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="phone" className="col-md-12 col-form-label">
          Phone
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="phone"
            name="phone"
            className={`form-control ${errors.has("phone") && "is-invalid"}`}
            placeholder="Phone"
            value={category.phone || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("phone") && (
            <div className="invalid-feedback">{errors.first("phone")}</div>
          )}
        </div>
      </div>

      {/* <div className="form-group row">
        <label htmlFor="password" className="col-md-12 col-form-label">
          Password
        </label>
        <div className="col-md-12">
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control ${errors.has("password") && "is-invalid"}`}
            placeholder="Password"
            value={category.password || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("password") && (
            <div className="invalid-feedback">{errors.first("password")}</div>
          )}
        </div>
      </div>


      <div className="form-group row">
        <label htmlFor="passwordConfirmation" className="col-md-12 col-form-label">
          Password Confirmation
        </label>
        <div className="col-md-12">
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            className={`form-control ${errors.has("passwordConfirmation") && "is-invalid"}`}
            placeholder="password Confirmation"
            value={category.passwordConfirmation || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("passwordConfirmation") && (
            <div className="invalid-feedback">{errors.first("passwordConfirmation")}</div>
          )}
        </div>
      </div> */}

      <div className="form-group row">
        <div className="col-md-12 ml-auto">
          <button
            disabled={errors.any()}
            type="submit"
            className="btn btn-primary"
          >
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update
          </button>
        </div>
      </div>
    </form>
  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
