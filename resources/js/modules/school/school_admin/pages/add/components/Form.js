import React from 'react'
import PropTypes from 'prop-types' 
const displayName = 'CategoryFrom'
const propTypes = {
  category: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
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
        <label htmlFor="firstName" className="col-md-12 col-form-label">
          First Name
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`form-control ${errors.has("firstName") && "is-invalid"}`}
            placeholder="First Name"
            value={category.firstName || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("firstName") && (
            <div className="invalid-feedback">{errors.first("firstName")}</div>
          )}
        </div>
      </div>
 
      <div className="form-group row">
        <label htmlFor="lastName" className="col-md-12 col-form-label">
          Last Name
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`form-control ${errors.has("lastName") && "is-invalid"}`}
            placeholder="Last Name"
            value={category.lastName || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("lastName") && (
            <div className="invalid-feedback">{errors.first("lastName")}</div>
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

      <div className="form-group row">
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
      </div>

      
      <div className="form-group row">
        <div className="col-sm-12 ml-auto">
          <button
            disabled={errors.any()}
            type="submit"
            className="btn btn-primary"
          >
            <i class="fa fa-plus" aria-hidden="true"></i> Add School Administrator
          </button>
        </div>
      </div>
    </form>

  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
