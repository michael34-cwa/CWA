import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'LoginForm'
const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  remember: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const Form = ({ email, password, remember, errors, handleChange, handleSubmit }) => (
  <form className="form" role="form" onSubmit={handleSubmit} noValidate>
    <h2 className="card-title">Administrator Login</h2>
    <div className="form-group">
      <label htmlFor="email" className="sr-only">Email</label>
      <i class="fa fa-envelope-o" aria-hidden="true"></i>
      <input type="text"
             className={`form-control form-control-lg rounded-0 ${errors.has('email') && 'is-invalid'}`}
             name="email"
             id="email"
             placeholder="Enter Email address"
             value={email || ''}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required
             autoFocus/>
      {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
    </div>
    <div className="form-group">
      <label htmlFor="password" className="sr-only">Password</label>
      <i class="fa fa-key" aria-hidden="true"></i>
      <input type="password"
             className={`form-control form-control-lg rounded-0 ${errors.has('password') && 'is-invalid'}`}
             id="password"
             name="password"
             placeholder="Enter Password"
             value={password || ''}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required/>
      {errors.has('password') && <div className="invalid-feedback">{errors.first('password')}</div>}
    </div>
    <div>
      <label className="custom-control custom-checkbox">
        <input type="checkbox"
               name="remember"
               className="custom-control-input"
               onChange={e => handleChange(e.target.name, !remember)}/>
        <span className="custom-control-indicator" />
        <span className="custom-control-description small"></span>
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={errors.any()}>Log In</button>
    <p class="logintext"> <Link to='/register'>Register </Link> <b>Or</b> <Link to='/forgot'>Forgot Password ?</Link> </p>
  </form>
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
