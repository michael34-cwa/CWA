import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../../common/loader'

const displayName = 'UserFrom'
const propTypes = {
  project_user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ loading, project_user, errors, onChange, onSubmit }) => {  

  function handleChange(name, value) { 
 
    if (value !== project_user[name]) { 
      onChange(name, value);
    }
  }


  return <form onSubmit={e => onSubmit(e)}>
    <div className="row">

         <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
            error={errors.has("firstName")}

              label="First Name"
              defaultValue="First Name"
            helperText={`${errors.has("firstName") ? errors.first("firstName").replace("firstName", "first name") : ''}`}
           value={project_user.firstName || ""}
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
            value={project_user.lastName || ""}
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
            value={project_user.email || ""}
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
            value={project_user.phone || ""}
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
                error={errors.has("schoolName")} 
                label="School Name"
                defaultValue="School Name"
                helperText={`${errors.has("schoolName") ? errors.first("schoolName").replace("schoolName", "school name") : ''}`}
              value={project_user.schoolName || ""}
                id="schoolName"
                name="schoolName"
                onChange={e => handleChange(e.target.name, e.target.value)}
              />
            </FormControl> 
      </div>

      <div className="col-md-6">
      <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("schoolAddress")}
              label="School Address"
              defaultValue="School Address"
              helperText={`${errors.has("schoolAddress") ? errors.first("schoolAddress").replace("schoolAddress", "school address") : ''}`}
              value={project_user.schoolAddress || ""}
              id="schoolAddress"
              name="schoolAddress"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
      </div>

    </div>


      <div className="row"> 
          <div className="col-md-12">
            <FormControl className="w-100 mb-3" >
              <TextField
                error={errors.has("schoolDescription")}
                multiline
                rowsMax="6"
                label="School Description"
                defaultValue="School Address"
                helperText={`${errors.has("schoolDescription") ? errors.first("schoolDescription").replace("schoolDescription", "school description") : ''}`}
              value={project_user.schoolDescription || ""}
                id="schoolDescription"
                name="schoolDescription"
                onChange={e => handleChange(e.target.name, e.target.value)}
              />
            </FormControl> 
          </div>
  
        </div>
    <div className="row">
      <div className="col-md-6">
        <FormControl className="w-100 mb-3" >
          <TextField
            error={errors.has("oldPassword")}
            type="password"
            label="Old Password"
            defaultValue="Old Password"
            helperText={`${errors.has("oldPassword") ? errors.first("oldPassword") : ''}`}
            value={project_user.oldPassword || ""}
            id="oldPassword"
            name="oldPassword" 
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
      </div>

      <div className="col-md-6">
        <FormControl className="w-100 mb-3" >
          <TextField
            error={errors.has("password")}
            type="password"
            label="Password"
            defaultValue="Password"
            helperText={`${errors.has("password") ? errors.first("password") : ''}`}
            value={project_user.password || ""}
            id="password"
            name="password"
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
      </div>

    </div>

    <div className="row">
    <div className="col-md-6">
      <FormControl className="w-100 mb-3" >
        <TextField
            error={errors.has("passwordConfirmation")}
            type="password"
            label="Confirm Password"
            defaultValue="Confirm Password"
            helperText={`${errors.has("passwordConfirmation") ? errors.first("passwordConfirmation") : ''}`}
            value={project_user.passwordConfirmation || ""}
            id="passwordConfirmation"
            name="passwordConfirmation"
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
      </FormControl>
    </div>

    </div>

    {<LoadingComponent isLoading={loading} error={''} />}
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
