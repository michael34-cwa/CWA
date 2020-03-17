import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../common/loader'

const displayName = 'UserFrom'
const propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ user, errors, onChange, onSubmit }) => { 
 
  return <form onSubmit={e => onSubmit(e)}>
    <div className="row">

         <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("first_name")}

              label="First Name"
              defaultValue="First Name"
              helperText={`${errors.has("first_name") ? errors.first("first_name").replace("_", " ") : ''}`}
              value={user.first_name || ""}
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
            helperText={`${errors.has("last_name") ? errors.first("last_name").replace("_", " ") : ''}`}
            value={user.last_name || ""}
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
            value={user.email || ""}
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
            value={user.phone || ""}
            id="phone"
            name="phone"
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
      </div>
      {/* {<LoadingComponent isLoading={loading} error={''} />} */}
    </div>



   
   
 
    <div className="form-group row">
      <div className="col-sm-12 ml-auto">
        <button disabled={errors.any()} type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
