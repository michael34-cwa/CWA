import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../../common/loader'

const displayName = 'TaskFrom'
const propTypes = {
  task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const TextForm = ({translate, errors, onChange, onSubmit }) => {
 
  function handleChangeTrans(name, value) {

   // if (value !== task[name]) {
    onChange(name, value);
  //  }
  }

 

  return (
    <form onSubmit={e => onSubmit(e)}>

      <div className="row">
       
      <div className="mb-3">
         <div className="editor-wrap p-2">
          <MyEditor id="translate" name="translate" value={translate|| ''} onChange={e => handleChangeTrans('translation', e)} />
      </div>
        {errors.has("translate") && (
          <div className="MuiFormHelperText-root Mui-error"> {errors.first("translate").replace("translate", "TextForm")} </div>
        )}
      </div>
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
            <i className="fa fa-plus mr-2" aria-hidden="true"></i>   Add Translation
          </Button>

          </div>

        </div>
     
    </form>
  );
};

TextForm.displayName = displayName
TextForm.propTypes = propTypes

export default TextForm
