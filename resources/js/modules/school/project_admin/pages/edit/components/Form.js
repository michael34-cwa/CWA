import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../../common/loader'
 
const displayName = 'projectAdminFrom'
const propTypes = {
  project_admin: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ loading, project_admin, errors, onChange, onSubmit }) => {

  function handleChange(name, value) {
    if (value !== project_admin[name]) {
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
              value={project_admin.firstName || ""}
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
              value={project_admin.lastName || ""}
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
              disabled
              label="Email"
              defaultValue="Email"
              helperText={`${errors.has("email") ? errors.first("email") : ''}`}
              value={project_admin.email || ""}
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
              value={project_admin.phone || ""}
              id="phone"
              name="phone"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>
      </div> 

        {<LoadingComponent isLoading={loading} error={''} />}



        <div className="row">
          <div className="col-md-12 ml-auto">
            <Button
              variant="contained"
              disabled={errors.any()}
              type="submit"
              className="text-capitalize colorPrimary"
              disableElevation
            >
              <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Update School
        </Button>

          </div>
        </div>
      </form> 
  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
