import React from 'react'
import PropTypes from 'prop-types' 
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../../common/loader'

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

const Form = ({ loading,category, errors, onChange, onSubmit }) => {
  
  function handleChange(name, value) {
    if (value !== category[name]) {
      onChange(name, value)
    }
  }
 
  return (
    <form onSubmit={e => onSubmit(e)}>


      <div className="row">
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("firstName")}

              label="First Name"
              defaultValue="First Name"
              helperText={`${errors.has("firstName") ? errors.first("firstName").replace("firstName", "first name") : ''}`}
              value={category.firstName || ""}
              id="firstName"
              name="firstName"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl> 
        </div>
   
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("lastName")}

              label="Last Name"
              defaultValue="Last Name"
              helperText={`${errors.has("lastName") ? errors.first("lastName").replace("lastName", "last name") : ''}`}
              value={category.lastName || ""}
              id="lastName"
              name="lastName"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>
      </div>


      <div className="row">
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("email")}

              label="Email"
              defaultValue="Email"
              helperText={`${errors.has("email") ? errors.first("email") : ''}`}
              value={category.email || ""}
              id="email"
              name="email"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>

        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("phone")}

              label="Phone"
              defaultValue="Phone"
              helperText={`${errors.has("phone") ? errors.first("phone") : ''}`}
              value={category.phone || ""}
              id="phone"
              name="phone"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>
      </div>
     
     
      <div className="row">
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("password")}
              type="password"
              label="Password"
              defaultValue="Password"
              helperText={`${errors.has("password") ? errors.first("password") : ''}`}
              value={category.password || ""}
              id="password"
              name="password"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>

        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("passwordConfirmation")}
              type="password"
              label="Password Confirmation"
              defaultValue="Password Confirmation"
              helperText={`${errors.has("passwordConfirmation") ? errors.first("passwordConfirmation").replace("passwordConfirmation", "password confirmation") : ''}`}
              value={category.passwordConfirmation || ""}
              id="passwordConfirmation"
              name="passwordConfirmation"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>
        {<LoadingComponent isLoading={loading} error={''} />}
      </div>


      
      <div className="form-group row">
        <div className="col-sm-12 ml-auto">

          <Button
            variant="contained"
            disabled={errors.any()}
            type="submit"
            className="text-capitalize colorPrimary"
            disableElevation
          >
            <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Add  School Administrator
        </Button>

    
        </div>
      </div>
    </form>

  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
