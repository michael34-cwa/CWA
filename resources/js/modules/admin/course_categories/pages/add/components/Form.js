import React from 'react'
import PropTypes from 'prop-types' 
import { TextField , Button  , FormControl  } from '@material-ui/core';
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
        <div className="col-md-12">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("category_name")}
              id="category_name"
              name="category_name"
              label="Category Name"
              placeholder="Category Name"
              helperText={`${errors.has("category_name") ? errors.first("category_name").replace("_", " ") : ''}`}
              value={category.category_name || ""}
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
            <i className="fa fa-plus mr-2" aria-hidden="true"></i> Add Course Category
          </Button>
          
        </div>
      </div>
    </form>

  );
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
