import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'Forget Password'

const propTypes = {
  email: PropTypes.string.isRequired,
  successMesg: PropTypes.object,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const Form = ({ email, successMesg, errors, handleChange, handleSubmit }) => {
  return (
    <form className="form" role="form" onSubmit={handleSubmit} noValidate>
      <h2 className="card-title">Forget Password</h2>

      <div className="form-group">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <input
          type="email"
          className={`form-control form-control-lg rounded-0 ${errors.has(
            "email"
          ) && "is-invalid"}`}
          name="email"
          id="email"
          placeholder="Enter Email address"
          value={email || ""}
          onChange={e => handleChange(e.target.name, e.target.value)}
          required
          autoFocus
        />
        {errors.has("email") && (
          <div className="invalid-feedback">{errors.first("email")}</div>
        )}
      </div>

      <button
        className="btn btn-lg btn-primary btn-block"
        type="submit"
        disabled={errors.has()}
      >
        Submit
      </button>
     {successMesg ? <div className="valid-feedback">{successMesg}</div> : ''}
  <p class="logintext"> <Link to='/login'>Login</Link> </p>
     </form>
  );
};

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
