import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../../common/loader'

const displayName = 'TaskFrom'
const propTypes = {
  course: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired,
  onChangeTime: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const Form = ({ loading,course, errors, onChangeTime, onSubmit }) => {
 
  function handleChangeTime(name, value) {
 
    if (value !== course[name]) {
      onChangeTime(name, value);
    }
  }
 
  return (
    <form onSubmit={e => onSubmit(e)}>

      <div className="row">
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("start_time")}

              label="Start Time"
            //  defaultValue="Task Name"
              helperText={`${errors.has("start_time") ? errors.first("start_time").replace("_", " ") : ''}`}
              value={course.start_time || ""}
              id="start_time"
              name="start_time"
              onChange={e => handleChangeTime(e.target.name, e.target.value)}
            />
          </FormControl> 
        </div>

        <div className="col-md-6">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("end_time")}

              label="End Time"
               helperText={`${errors.has("end_time") ? errors.first("end_time").replace("_", " ") : ''}`}
            value={course.end_time || ""}
              id="end_time"
              name="end_time"
              onChange={e => handleChangeTime(e.target.name, e.target.value)}
            />
          </FormControl> 
        </div>

      </div>
 
      <div className="mb-3">
        <label htmlFor="title">Video Description</label>
        <div className="editor-wrap p-2">
          <MyEditor id="vid_disc" name="vid_disc"
          //  value={task.task_description || ""} 
           onChange={e => handleChangeTime('vid_disc', e)} />

        </div>
        {errors.has("vid_disc") && (
          <div className="MuiFormHelperText-root Mui-error"> {errors.first("vid_disc").replace("_", "Video Description")} </div>
        )}
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
            <i className="fa fa-plus mr-2" aria-hidden="true"></i>   Add Timer
          </Button>
          
     
        </div>
      </div>
    </form>
  );
};

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
