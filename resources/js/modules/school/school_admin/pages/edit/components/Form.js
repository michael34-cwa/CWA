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
              error={errors.has("first_name")}

              label="First Name"
              defaultValue="First Name"
              helperText={`${errors.has("first_name") ? errors.first("first_name").replace("_", " ") : ''}`}
              value={category.first_name || ""}
              id="first_name"
              name="first_name"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>

        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("last_name")}

              label="Last Name"
              defaultValue="Last Name"
              helperText={`${errors.has("last_name") ? errors.first("last_name").replace("_",  " ") : ''}`}
              value={category.last_name || ""}
              id="last_name"
              name="last_name"
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
              disabled
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
        {<LoadingComponent isLoading={loading} error={''} />}
      </div>



      <div className="form-group row">
        <div className="col-md-12 ml-auto">
          <Button
            variant="contained"
            disabled={errors.any()}
            type="submit"
            className="text-capitalize colorPrimary"
            disableElevation
          >
            <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Update  School Administrator
        </Button>
        </div>
      </div>
    </form>
  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
