import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../../common/loader'

const displayName = 'UserFrom'
const propTypes = {
  admin_user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const ChangePassword = ({ loading, errors, onChangePass, onSubmitPass }) => {  
 
  function handleChangePass(name, value) { 
 
    if (value !== admin_user[name]) { 
      onChangePass(name, value);
    }
  }


  return <form onSubmitPass={e => onSubmitPass(e)}>
    <div className="row">

         <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
            error={errors.has("password")}

              label="First Name"
              defaultValue="First Name"
            helperText={`${errors.has("password") ? errors.first("password").replace("password", "first name") : ''}`}
      //     value={admin_user.password || ""}
            id="password"
            name="password"
            onChange={e => handleChangePass(e.target.name, e.target.value)}
            />
          </FormControl>
        </div>


      
      {<LoadingComponent isLoading={loading} error={''} />}
    </div>

 
    <div className="form-group row">
      <div className="col-sm-12 ml-auto">
        <button disabled={errors.any()} type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
}

ChangePassword.displayName = displayName
ChangePassword.propTypes = propTypes

export default ChangePassword
