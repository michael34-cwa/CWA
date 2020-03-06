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

const Form = ({ loading, category, errors, onChange, onSubmit }) => {

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
                error={errors.has("schoolName")} 
                label="School Name"
                defaultValue="School Name"
                helperText={`${errors.has("schoolName") ? errors.first("schoolName").replace("schoolName", "school name") : ''}`}
                value={category.schoolName || ""}
                id="schoolName"
                name="schoolName"
                onChange={e => handleChange(e.target.name, e.target.value)}
              />
            </FormControl> 
          </div>

          <div className="col-md-6">
            <FormControl className="w-100 mb-3" >
              <TextField
                error={errors.has("phone")} 
                label="Phone"
                defaultValue="School Name"
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
            <FormControl className="w-100 mb-3" error={errors.has("isActive")}>
              <InputLabel id="isActive"> School Status</InputLabel>
              <Select
                labelId="isActive"
                id="isActive"
                name="isActive"
                value={category.isActive || ""}
                placeholder="School Status"
                onChange={e => handleChange(e.target.name, e.target.value)}
              >
                <MenuItem value={0}>In Active</MenuItem>
                <MenuItem value={1}>Active</MenuItem>
              </Select>
              {errors.has("isActive") && (
                <FormHelperText>{errors.first("isActive").replace("isActive", "school status")}</FormHelperText>
              )}
            </FormControl>

          </div>
          <div className="col-md-6">
            <FormControl className="w-100 mb-3" >
              <TextField
                error={errors.has("schoolAddress")} 
                label="School Address"
                defaultValue="School Address"
                helperText={`${errors.has("schoolAddress") ? errors.first("schoolAddress").replace("schoolAddress", "school address") : ''}`}
                value={category.schoolAddress || ""}
                id="schoolAddress"
                name="schoolAddress"
                onChange={e => handleChange(e.target.name, e.target.value)}
              />
            </FormControl>

          </div></div>

 
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
                value={category.schoolDescription || ""}
                id="schoolDescription"
                name="schoolDescription"
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
